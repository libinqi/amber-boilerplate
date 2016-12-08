import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  HostListener,
  EventEmitter
} from '@angular/core';

import { WindowService } from '../../services/window.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-dock',
  inputs: ['dockItems', 'iconWidth'],
  templateUrl: 'dock.component.html',
  styleUrls: ['dock.component.css']
})
export class DockComponent implements OnInit {
  @ViewChild('dockDiv') private dock: ElementRef;
  // 页面大小
  @Input() private docWidth: number;
  @Input() private docHeight: number;

  private arrayImg: HTMLCollection;
  private dockItems: any[];

  private iconWidth: number = 30;
  private minimalScale: number = 0.5;
  private minimalDistance: number = 300;

  // 决定布局的百分比（left、top）
  private offsetLeft: number = 60;
  private offsetTop: number = 20;

  constructor(private navService: NavService) {

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
    let dock = this.dockItems.filter((_dock) => {
      return (_dock.id === id);
    })[0];

    // 验证窗口是否打开
    if (!dock.opened) {
      this.navService.actionWindow(dock);
    }
    else {
      if (dock.ref) dock.ref.focus();
    }
    return false;
  }
}
