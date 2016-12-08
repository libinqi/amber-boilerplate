import { MixinObject } from './mixin';
import { DockItem } from './dock-item';

export class NavbarItem extends MixinObject {
  public id: string = '';
  public title: string = '';
  public image: string = '';
  public submenus: NavbarSubItem[] = [];
  public dockmenus: DockItem[] = [];
  public url: string = '';
  public opened: boolean = false;
  public selected: boolean = false;
  public ref: any = null;
  constructor(obj?: any) {
    super();
    this.mixin(obj);
  }
}

export class NavbarSubItem extends MixinObject {
  public id: string = '';
  public title: string = '';
  public image: string = '';
  public url: string = '';
  public routerlink: string = '';
  constructor(obj?: any) {
    super();
    this.mixin(obj);
  }
}
