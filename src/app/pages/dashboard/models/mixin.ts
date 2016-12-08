export class MixinObject{
  public mixin(obj ?: any){
    let keys = Object.keys(obj);
    keys.forEach(key => {
      if(typeof this[key] !== 'undefined' && obj[key])
        this[key] = obj[key];
    });
    return this;
  }
}
