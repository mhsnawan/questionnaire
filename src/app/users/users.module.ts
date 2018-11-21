import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { ViewUserComponent } from './view-user/view-user.component';

import {
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatRippleModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatOptionModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTabsModule,
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatRippleModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTabsModule,
        MatTooltipModule,
    ],
    declarations: [
        UsersComponent,
        ViewUserComponent,
    ],
    exports: [
        UsersComponent,
        ViewUserComponent,
    ],
})
export class UsersModule { }
