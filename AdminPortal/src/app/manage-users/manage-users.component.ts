import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../model.user';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  flag : boolean = false;
  users:Array<User>;
  constructor(public userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  loadProductInfo(): void {
    this.flag = true;
    this.userService.getUserDetails().subscribe(data=>this.users=data);
  }

}
