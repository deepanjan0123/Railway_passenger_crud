import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  userDetails:any = [];
    // {name:"Deep",
    // email:"deepanjan@gmail.com"}
    myimage:string = '/assets/img/pic (1).jpg';
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.userDetail.subscribe(data=>{
      console.log("get data",data);
      this.userDetails = JSON.parse(data);
      console.log(this.userDetails);
    });
    
  }
  // console.log(this.userDetails);
}
