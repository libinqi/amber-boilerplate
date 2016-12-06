import {
  Component,
  ViewEncapsulation,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import { DockComponent } from './components/dock/dock.component';
import { WindowService } from './services/window.service';
import { NavbarItem, NavbarSubItem } from './models/navbar-item';
import { DockItem } from './models/dock-item';
import { MENU_CONFIG } from './dashboard.menu';


@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.css')],
  template: require('./dashboard.html')
})
export class Dashboard {
  @ViewChild('dashboardDiv') private el: ElementRef;

  private winlist: DockItem[] = [];
  private navitems: NavbarItem[] = [];
  private iconWidth: number = 30;

  // 页面大小
  private docWidth: number = 1024;
  private docHeight: number = 768;

  //get conf
  private dock_conf: any = null;

  constructor(private _wm: WindowService) {
    //recupere la conf pour le user
    if (MENU_CONFIG['username']) {
      let user = MENU_CONFIG['username'];
      if (MENU_CONFIG['dock'][user])
        this.dock_conf = MENU_CONFIG['dock'][user];
    }
    //sinon conf par defaut
    if (!this.dock_conf) {
      this.dock_conf = MENU_CONFIG['dock']['default'];
    }

    this.dock_conf.forEach((win) => {
      this.winlist.push(new DockItem(win));
    });

    MENU_CONFIG['navbar'].forEach((win) => {
      this.navitems.push(new NavbarItem(win));
    });

    this.iconWidth = MENU_CONFIG['iconWidth'];
  }

  public ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    let self = this;
    let style = self.el.nativeElement.ownerDocument.body.getBoundingClientRect();

    self.winlist.forEach((win) => {
      if (win.opened && win.ref) {
        let x = win.ref.x - (self.docWidth - style.width);
        let y = win.ref.y - (self.docHeight - style.height);
        win.ref.move(x, y);
      }
    });

    self.docWidth = style.width;
    self.docHeight = style.height;
  }

  private toggleExpose() {
    this._wm.toggleExpose();
  }

  private winresize() {
    console.log('da')
  }



}
