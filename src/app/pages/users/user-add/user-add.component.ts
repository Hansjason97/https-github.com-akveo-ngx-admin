import { UserService } from './../../../@core/mock/users.service';
import { User } from './../../../models/users';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  id: number;


  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }



  onSubmit(form: NgForm) {
    let user: User = {
      user_name: form.value.user_name,
      user_email: form.value.user_email,
      user_password: form.value.user_password,
      user_phone_professional: form.value.user_phone_professional,
      user_phone_Mobile1: form.value.user_phone_Mobile1,
      user_phone_Mobile2: form.value.user_phone_Mobile2,
      user_fax: form.value.user_fax,
    }

    this.userService.onAdd(user);
  }
}
