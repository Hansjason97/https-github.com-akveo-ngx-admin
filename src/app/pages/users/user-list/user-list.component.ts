import { UserService } from './../../../services/users.service';
import { User } from '../../../models/users';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.onGet();
  }

}
