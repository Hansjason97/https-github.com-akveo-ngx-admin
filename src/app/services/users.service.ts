import { Injectable } from '@angular/core';
import { User } from './../models/users';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    users: User[] = [
        {
            user_Unique_Id_Number: 1,
            user_name: 'Sadam Hussein',
            user_email: 'Sadam@smartBgft.com',
            user_login: 'SadamHussein',
            user_is_active: true,
            user_phone_professional: '677 77 77 77',
            user_creator: 'Bgft-Admin',
            user_password: null,
            user_date_of_creation: null,
            user_fax: null,
            user_password_modification_required: null,
            user_picture: null,
            user_phone_Mobile1: null,
            user_phone_Mobile2: null,
        },
    ];
constructor() { }

onGet() {
    return this.users;
}

onAdd(user: User) {
    this.users.push(user);
}
}
