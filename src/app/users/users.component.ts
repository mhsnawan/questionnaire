import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
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

}

export interface PeriodicElement {
  name: string;
  ID: number;
  email: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, name: 'Hydrogen', email: 1.0079, symbol: 'H'},
  {ID: 2, name: 'Helium', email: 4.0026, symbol: 'He'},
  {ID: 3, name: 'Lithium', email: 6.941, symbol: 'Li'},
  {ID: 4, name: 'Beryllium', email: 9.0122, symbol: 'Be'},
  {ID: 5, name: 'Boron', email: 10.811, symbol: 'B'},
  {ID: 6, name: 'Carbon', email: 12.0107, symbol: 'C'},
  {ID: 7, name: 'Nitrogen', email: 14.0067, symbol: 'N'},
  {ID: 8, name: 'Oxygen', email: 15.9994, symbol: 'O'},
  {ID: 9, name: 'Fluorine', email: 18.9984, symbol: 'F'},
  {ID: 10, name: 'Neon', email: 20.1797, symbol: 'Ne'},
  {ID: 11, name: 'Sodium', email: 22.9897, symbol: 'Na'},
  {ID: 12, name: 'Magnesium', email: 24.305, symbol: 'Mg'},
  {ID: 13, name: 'Aluminum', email: 26.9815, symbol: 'Al'},
  {ID: 14, name: 'Silicon', email: 28.0855, symbol: 'Si'},
  {ID: 15, name: 'Phosphorus', email: 30.9738, symbol: 'P'},
  {ID: 16, name: 'Sulfur', email: 32.065, symbol: 'S'},
  {ID: 17, name: 'Chlorine', email: 35.453, symbol: 'Cl'},
  {ID: 18, name: 'Argon', email: 39.948, symbol: 'Ar'},
  {ID: 19, name: 'Potassium', email: 39.0983, symbol: 'K'},
  {ID: 20, name: 'Calcium', email: 40.078, symbol: 'Ca'},
];
