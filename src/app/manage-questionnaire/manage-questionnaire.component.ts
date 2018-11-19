import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-manage-questionnaire',
  templateUrl: './manage-questionnaire.component.html',
  styleUrls: ['./manage-questionnaire.component.scss']
})
export class ManageQuestionnaireComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'name', 'email', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  EditQuestionnaire(){

  }

}

export interface PeriodicElement {
  name: string;
  ID: number;
  email: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, name: 'John', email: 'john@me.com', symbol: 'H'},
  {ID: 2, name: 'Micheal', email: 'micheael@gmail.com', symbol: ''},
  {ID: 3, name: 'William', email: 'william@outlook.com', symbol: 'Li'},
  {ID: 4, name: 'David', email: 'david@yahoo.com', symbol: 'Be'},
  {ID: 5, name: 'Brown', email: 'brown@telnet.com', symbol: 'B'},
  {ID: 6, name: 'Carbon', email: 'john@me.com', symbol: 'C'},
  {ID: 7, name: 'Nitrogen', email: 'john@me.com', symbol: 'N'},
  {ID: 8, name: 'Oxygen', email: 'john@me.com', symbol: 'O'},
  {ID: 9, name: 'Fluorine', email: 'john@me.com', symbol: 'F'},
  {ID: 10, name: 'Neon', email: 'john@me.com', symbol: 'Ne'},
  {ID: 11, name: 'Sodium', email: 'john@me.com', symbol: 'Na'},
  {ID: 12, name: 'Magnesium', email: 'john@me.com', symbol: 'Mg'},
  {ID: 13, name: 'Aluminum', email: 'john@me.com', symbol: 'Al'},
  {ID: 14, name: 'Silicon', email: 'john@me.com', symbol: 'Si'},
  {ID: 15, name: 'Phosphorus', email: 'john@me.com', symbol: 'P'},

];
