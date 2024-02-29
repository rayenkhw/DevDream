import { Component, OnInit } from '@angular/core';
import {User} from 'app/user'
import {UserService} from 'app/service/user.service'
@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {
  userss : User[];

  constructor(private userService : UserService ) { }

  ngOnInit(): void {
this.getUsers();

  }
  private getUsers(){

    this.userService.getUserList().subscribe(data => 
      { this. userss = data; 
      console.log(this.userss);
    }
      );
  }

}
