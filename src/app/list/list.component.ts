import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // UserService: any;
 

  list: any=[];
  updateRowlist:any=[];
  // for (let item of this.list) {
  //   for (let data of this.updateRowlist) {
  //       if (item.name == data.name) {
  //           console.log("success");
  //           console.log(item);
  //       }
  //   }

  // }
   
  constructor(private userService:UserService,
              private router:Router) { }


  ngOnInit(): void {
    this.userService.currentMessage.subscribe(data => {
     console.log(data);   
      this.list = JSON.parse(data);
      console.log(this.list);
    });
    console.log(this.list);
    this.userService.updatedmessage.subscribe(result =>{
      // console.log(row);
      this.updateRowlist = JSON.parse(result);
      console.log(this.updateRowlist);
       for (let item of this.list) {
       
          for (let data of this.updateRowlist) {
              if (item.name == data.name) {
                  console.log("success");
                  let index = this.list.indexOf(item);
                  console.log(index);
                   this.list.splice(index,1,this.updateRowlist[0]);
                   console.log(this.list);
                   this.userService.changeMessage(JSON.stringify(this.list));
                  //  this.router.navigate(['delete']);
              }
            }
        }
    });
    
  }
  
  deleteRow(index: any){
    console.log(index);
    this.list.splice(index,1);
    this.userService.changeMessage(this.list);
    // this.userService.alertForSuccess("Delete Row Successfull","");
  }
  updateRow(row:any){
    console.log(row);
    console.log(this.list[row]);
    this.userService.updateMessage(this.list[row]);
    this.router.navigate(['update']);
    
    // console.log("update...",this.updateRowlist[row]);
    // this.list.splice(row,1,this.updateRowlist[0]);
    // // this.list[row] =  this.updateRowlist[row];
    // this.userService.changeMessage(this.list);
  }
}
