import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditQuestionnaireComponent } from './edit-questionnaire/edit-questionnaire.component';
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
import { ManageQuestionnaireComponent } from './manage-questionnaire.component';

@NgModule({
  declarations: [
    EditQuestionnaireComponent,
    ManageQuestionnaireComponent
  ],
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
  exports:[
    EditQuestionnaireComponent,
    ManageQuestionnaireComponent
  ]
})
export class ManageQuestionnaireModule { }
