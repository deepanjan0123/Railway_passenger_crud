import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 updateForm: FormGroup;
 obj:any = {};
 list:any =[];
 passengerName = this.obj.name;
 name1 = this.passengerName;
  selectedCity: any;

  constructor(private userService:UserService,
              private updateDetail:FormBuilder,
              private router:Router)
              {    
      this.updateForm = this.updateDetail.group({
        name : new FormControl(" ",[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
        email: new FormControl(" ",[Validators.required,Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]),
        phone: new FormControl(" ",[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
        dob:   new FormControl(" ",[Validators.required]),
        gender:new FormControl(" ",[Validators.required]),
        payment:new FormControl(" ",[Validators.required]),
        amount:new FormControl(" ",[Validators.required]),
        city:new FormControl(" ",[Validators.required]),
      })
  }
 
  ngOnInit(): void {
    this.userService.updateRowmessage.subscribe(data =>
      {
        
        this.obj =data;
        console.log(this.obj);
      })
  }
  updatePassenger(){
    
    var sendData = {
      name: this.updateForm.value.name,
      email: this.updateForm.value.email,
      phone: this.updateForm.value.phone,
      dob: this.updateForm.value.dob,
      gender:this.updateForm.value.gender,
      payment: this.updateForm.value.payment,
      amount: this.updateForm.value.amount,
      city: this.selectedCity
    }
    console.log(sendData);
    this.list.push(sendData);
    this.userService.updatedRowMessages(JSON.stringify(this.list));
    // this.userService.alertForSuccess("update successfull","Success!");
    this.router.navigate(['list']);
  }
  selectCity(event:any){
    this.selectedCity = event.target.value;
  }
}
