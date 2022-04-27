import { Injectable } from '@angular/core';
declare let alertify:any
@Injectable()
export class AlertifyService {

constructor() { }

comfirm(message:string, okcallback:()=>any){
alertify.confirm(message, function(e:any){
  if ((e)) {
okcallback()
  }
  else{}
});
}
success(message:string){
alertify.success(message);
}
error(message:string){
  alertify.error(message);
}
warning(message:string){
alertify.warning(message);
}
message(message:string){
  alertify.message(message);
}
}
