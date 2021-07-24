import { Component, OnInit } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  railway: FormGroup;
 
  passengerList:any = [];
  fullList:any = [];
  selectedCity: any;
  
  constructor(
    private signup : FormBuilder,
    private userService:UserService,
    private router:Router,
    private toastr:ToastrService
  ) {
    this.railway = this.signup.group({
      name : new FormControl(" ",[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
      email: new FormControl(" ",[Validators.required,Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]),
      phone: new FormControl(" ",[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
      dob:   new FormControl(" ",[Validators.required]),
      gender:new FormControl(" ",[Validators.required]),
      payment:new FormControl(" ",[Validators.required]),
      amount:new FormControl(" ",[Validators.required]),
      city:new FormControl(" ",[Validators.required]),
          // votercard:new FormControl(" ",[Validators.required])
    })
    
   }

  ngOnInit() {
    this.userService.currentMessage.subscribe(data => {
      // console.log("Remaining data",data);
      if(data)
      {
        let newData = JSON.parse(data);
        // console.log("new data...",newData);
        this.fullList = newData;
        console.log(this.fullList);
      }
    });

    
  }
 
  passengerSubmit(){
    // if(this.railway.value.name && this.railway.value.email && this.railway.value.phone && this.railway.value.dob && this.railway.value.gender && this.railway.value.payment && this.railway.value.amount && this.railway.value.city )
    if(this.railway.valid)
    {
      console.log(this.railway.value.name+" "+this.railway.value.email+" "+this.railway.value.phone+" "+this.railway.value.dob+" "+this.railway.value.gender+" "+this.railway.value.payment+" "+this.railway.value.amount)
       var sendData = {
        name: this.railway.value.name,
        email: this.railway.value.email,
        phone: this.railway.value.phone,
        dob: this.railway.value.dob,
        gender:this.railway.value.gender,
        payment: this.railway.value.payment,
        amount: this.railway.value.amount,
        city:this.selectedCity
      }
      console.log(sendData);
      this.passengerList.push(sendData);
      console.log("data...",this.passengerList);
      if(this.fullList && this.fullList.length > 0)
      {
        console.log("prepare data...",this.passengerList);
        console.log("send data...",sendData);
        this.fullList.push(sendData);
        console.log("list data...",this.fullList);
        // this.userService.alertForSuccess("Please fill up all fields","Warning!");
        this.userService.changeMessage(JSON.stringify(this.fullList));
        this.router.navigate(['list']);
        
      }
      else{
        console.log("prepare data...",this.passengerList);
        console.log("list data...",this.fullList);
        this.userService.changeMessage(JSON.stringify(this.passengerList));
        this.router.navigate(['list']);
      }

    }
    else{
      this.userService.alertForWarning("Please fill up all fields","Warning!");
    }
  }
  selectCity(event:any){
    this.selectedCity = event.target.value;
  }
}


