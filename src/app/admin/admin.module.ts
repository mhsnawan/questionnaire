import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { AdminComponent } from './admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';


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
        AdminComponent,
        AddAdminComponent,
        EditAdminComponent,
    ],
    exports: [
        AdminComponent,
        AddAdminComponent,
        EditAdminComponent,
    ],
})
export class AdminModule { }
