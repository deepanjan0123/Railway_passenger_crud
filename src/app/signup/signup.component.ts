import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup:FormGroup
  userSignup:any = [];
  constructor(
    private sign : FormBuilder,
    private userService:UserService,
    private router:Router
  ) {
    this.signup = this.sign.group({

       name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
       email: new FormControl(null,[Validators.required,Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]),
       pswd: new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(8)])
    })
   }

  ngOnInit(): void {
  }

  Submit(){
    if(this.signup.valid)
    {
      console.log(this.signup.value);
      let userDetail = {
        name:this.signup.value.name,
        email:this.signup.value.email,
        password:this.signup.value.pswd
      }
      console.log(userDetail);
      this.userSignup.push(userDetail);
      this.userService.userDetailsRow(JSON.stringify(this.userSignup));
      this.router.navigate(['profile']);
    }
    

  }
}
