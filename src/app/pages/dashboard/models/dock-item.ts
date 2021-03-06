import { MixinObject } from './mixin';

export class DockItem extends MixinObject {
  public id: string = '';
  public image: string = '';
  public url: string = '';
  public title: string = '';
  public opened: boolean = false;
  public selected: boolean = false;
  public ref: any = null;

  constructor(obj?: any) {
    super();
    this.mixin(obj);
    return this;
  }
}
