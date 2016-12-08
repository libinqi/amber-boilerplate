import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  inputs: ['winList', 'iconWidth'],
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
  private heure: string = '';
  private winList: any[];

  constructor(private _eref: ElementRef) { }

  ngOnInit() {
    // 桌面时间，1秒钟刷新一次
    setInterval(this.updateDate, 1000, this);
  }

  public updateDate(scope) {
    let d = new Date();
    scope.heure = d.toLocaleDateString() + ' ' + d.toTimeString().split(' ')[0];
  }

  public clickOnMain() {
    this.unselectAll();
  }

  public clickOnTitle(item, event) {
    this.handleSelection(item, event);
    if (!item.opened) {
      item.ref.open();
      item.opened = true;
    }
  }

  public handleSelection(item, event) {
    item.ref.focus();
    if (event) {
      event.stopPropagation();
      return false;
    }
  }

  private unselectAll() {
    this.winList.forEach((item) => {
      if (item.opened && item.ref) {
        item.ref.minimize();
      }
    });
  }

}
