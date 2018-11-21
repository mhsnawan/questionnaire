import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { ComponentsModule } from 'app/components/components.module';
import { ManageQuestionnaireModule } from 'app/manage-questionnaire/manage-questionnaire.module';
import { UsersComponent } from 'app/users/users.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatTableModule,
  MatTableDataSource,
  MatSortModule,
  MatPaginatorModule,
  MatTabsModule,
} from '@angular/material';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';
import { AdminComponent } from '../../admin/admin.component';
import { UsersModule } from '../../users/users.module';
import { AdminModule } from '../../admin/admin.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatTableModule,
    ManageQuestionnaireModule,
    AdminModule,
    UsersModule,
    ComponentsModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
  ],
  declarations: [
    UserProfileComponent,
  ]
})

export class AdminLayoutModule {}
