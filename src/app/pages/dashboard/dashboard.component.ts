import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import { DockComponent } from './components/dock/dock.component';
import { NavbarItem, NavbarSubItem } from './models/navbar-item';
import { DockItem } from './models/dock-item';
import { MENU_CONFIG } from './dashboard.menu';
import { WindowService } from './services/window.service';
import { NavService } from './services/nav.service';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.css')],
  template: require('./dashboard.html')
})
export class Dashboard {
  @ViewChild('dashboardDiv') private el: ElementRef;
  private winList = [];
  private dockItems: DockItem[] = [];
  private navItems: NavbarItem[] = [];
  private iconWidth: number = 30;

  // 页面大小
  private docWidth: number = 1024;
  private docHeight: number = 768;

  // 决定布局的百分比（left、top）
  private offsetLeft: number = 20;
  private offsetTop: number = 5;

  constructor(private windowService: WindowService, private navService: NavService) {
    if (MENU_CONFIG['menu']) {
      MENU_CONFIG['menu'].forEach((menu) => {
        let nav = new NavbarItem(menu);
        if (menu.submenu && menu.submenu.length > 0) {
          for (let _submenu of menu.submenu) {
            nav.submenus.push(new NavbarSubItem(_submenu));
          }
        }
        if (menu.dock && menu.dock.length > 0) {
          for (let _dock of menu.dock) {
            nav.dockmenus.push(new DockItem(_dock))
          }
        }
        this.navItems.push(nav);
      });
    }
    this.iconWidth = MENU_CONFIG['iconWidth'];

    navService.dockAction$.subscribe(
      dockItems => {
        this.dockItems = dockItems;
      });

    navService.windowAction$.subscribe(
      win => {
        this.openWindow(win);
      });
  }

  public ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    let self = this;
    let style = self.el.nativeElement.ownerDocument.body.getBoundingClientRect();

    self.winList.forEach((win) => {
      if (win.opened && win.ref) {
        let x = win.ref.x - ((self.docWidth - style.width) / 2);
        let y = win.ref.y - ((self.docHeight - style.height) / 2);
        win.ref.move(x, y);
      }
    });

    self.docWidth = style.width;
    self.docHeight = style.height;
  }

  private openWindow(win) {
    let _win = _.find(this.winList, { id: win.id });
    if (!_win) {
      this.winList.push(win);
    }
    // 验证窗口是否打开
    if (!win.ref) {
      win.opened = true;

      // 创建窗口
      setTimeout((scope) => {
        let currentWindow = scope.windowService.createWindowFromQuery('#' + win.id, {
          id: win.id,
          title: win.title,
          width: 1024,
          height: 768,
          x: scope.docWidth * (scope.offsetLeft / 100),
          y: scope.docHeight * (scope.offsetTop / 100),
          content: '正在加载...',
          events: {
            closed: (e) => {
              console.log('关闭窗口 ' + e.options.id);
              win = scope.winList.filter((_win) => {
                return (_win.id === e.options.id);
              })[0];

              e.destroy();
              win.opened = false;
              win.selected = false;
            },
            minimized: (e) => {
              console.log('最小化窗口' + e.options.id);
              win = scope.winList.filter((_win) => {
                return (_win.id === e.options.id);
              })[0];
              win.selected = false;
              win.ref.el.css('display', 'none');
            },
            focus: (e) => {
              console.log('选择窗口' + e.options.id);
              scope.winList.forEach((autre) => {
                if (autre.id === e.options.id) {
                  autre.selected = true;
                  if (autre.ref && autre.ref.el.css('display') === 'none') {
                    autre.ref.el.css('display', 'block');
                  }
                } else {
                  autre.selected = false;
                }
              });
            }
          }
        });
        win.ref = currentWindow;
      }, 0, this);


      // 每次打开一个新窗口增加偏移
      this.offsetLeft += 1;
      this.offsetTop += 1;
    }
    else {
      win.opened = true;
      win.ref.focus();
    }
    return false;
  }

  private toggleExpose() {
    this.windowService.toggleExpose();
  }

  private winresize() {
    console.log('da');
  }



}
