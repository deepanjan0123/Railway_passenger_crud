import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.currentMessage.subscribe(data =>
      {
        console.log(data);
      })
  }

}
