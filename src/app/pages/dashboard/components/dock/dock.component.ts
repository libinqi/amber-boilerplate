import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  HostListener,
  EventEmitter
} from '@angular/core';

import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-dock',
  inputs: ['winlist', 'iconWidth', 'docWidth', 'docHeight'],
  templateUrl: 'dock.component.html',
  styleUrls: ['dock.component.css']
})
export class DockComponent implements OnInit {
  @ViewChild('dockDiv') private dock: ElementRef;
  private arrayImg: HTMLCollection;
  private winlist: any[];

  private iconWidth: number = 30;
  private minimalScale: number = 0.5;
  private minimalDistance: number = 300;

  // 页面大小
  private docWidth: number = 1024;
  private docHeight: number = 768;

  // 决定布局的百分比（left、top）
  private offsetLeft: number = 60;
  private offsetTop: number = 20;

  constructor(private _wm: WindowService) {

  }

  ngOnInit() {
    this.arrayImg = this.dock.nativeElement.children;

    document.onmousemove = (ev) => {
      this.onMovement(ev);
    };
  }


  private onMovement(ev) {
    let oEvent: MouseEvent = <MouseEvent>ev || <MouseEvent>event;
    for (let i = 0; i < this.arrayImg.length; i++) {
      let elem: HTMLElement = <HTMLElement>this.arrayImg[i];
      // 计算光标到每个图片中心的水平与垂直距离
      let a = elem.offsetLeft + elem.offsetWidth / 2 - oEvent.clientX;
      let b = elem.offsetTop + this.dock.nativeElement.offsetTop +
        elem.offsetHeight / 2 - oEvent.clientY;

      // 计算光标到每个图片中心的直线距离
      let c = Math.sqrt(a * a + b * b);
      // 当距离越小, 图片就变得越大, 300 是一个初始值可以根据实际需求调整
      // 获取光标移到到Dock的距离
      let scale = 1 - c / this.minimalDistance;
      // 总是按1/2的比例进行缩放
      if (scale < this.minimalScale) {
        scale = this.minimalScale;
      }
      elem.style.width = this.iconWidth * scale + 'px';
    }
  }

  private dockSelect(id) {
    // 获取window的参数
    let win = this.winlist.filter((_win) => {
      return (_win.id === id);
    })[0];

    // 验证窗口是否打开
    if (!win.opened) {
      win.opened = true;

      // 创建窗口
      setTimeout((scope) => {
        let currentWindow = scope._wm.createWindowFromQuery('#' + win.id, {
          title: win.title,
          width: 450,
          height: 380,
          x: scope.docWidth - (scope.docWidth * (scope.offsetLeft / 100)),
          y: scope.docHeight * (scope.offsetTop / 100),
          events: {
            closed: () => {
              console.log('closed sur ' + win.id)
              currentWindow.destroy();
              win.opened = false;
              win.selected = false;
            },
            focus: () => {
              console.log('focus sur ' + win.id);
              scope.winlist.forEach((autre) => {
                autre.selected = false;
              });
              win.selected = true;
            }
          }
        });
        win.ref = currentWindow;
      }, 0, this);


      // 每次打开一个新窗口增加偏移
      // this.offsetLeft += 10;
      // this.offsetTop += 10;
    }
    else {
      win.ref.focus();
    }
    return false;
  }
}
