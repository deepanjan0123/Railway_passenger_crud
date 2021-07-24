import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// import { NgFlashMessagesModule } from 'ng-flash-messages';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();


  private message = new BehaviorSubject("");
  updateRowmessage = this.message.asObservable();

  private updaterow = new Subject<any>();
  updatedmessage = this.updaterow.asObservable();

  private user = new BehaviorSubject("");
  userDetail = this.user.asObservable();
  constructor(private toastr:ToastrService) { }

  changeMessage(message: string)
  {
    this.messageSource.next(message);
  }
  updateMessage(result: string)
  {
    this.message.next(result);
  }

  updatedRowMessages(row:string) {
    this.updaterow.next(row);
   }

   userDetailsRow(userRow: string){
    this.user.next(userRow);
   }




  alertForSuccess(message:any,title:any){
    this.toastr.success(message, title);
  }
  alertForWarning(message:any,title:any){
    this.toastr.warning(message, title);
  }
  alertFordanger(message:any,title:any){
    this.toastr.error(message, title);
  }
}
