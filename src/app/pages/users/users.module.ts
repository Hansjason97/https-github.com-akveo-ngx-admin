import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UsersComponent } from './users.component';
import {
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule, NbUserModule,
    NbInputModule,
    NbIconModule,
  } from '@nebular/theme';




@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      ThemeModule,
      UsersRoutingModule,
      NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    NbInputModule,
    NbIconModule,
    ],
    declarations: [
      UsersComponent,
      UserAddComponent,
      UserDetailComponent,
      UserListComponent,
      UserEditComponent,
    ],
    providers: [],
  })
  export class UsersModule { }
