import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';;
import { User } from '../../../models/users';

@Component({
  selector: 'ngx-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {


  constructor() { }

  ngOnInit(): void { }
}
