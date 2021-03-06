import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{
  displayTab = false;
  selectedIndex = 0;

  displayedColumns: string[] = ['ID', 'email', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayEditTab(f: boolean) {
    this.displayTab = f;
  }
  selectindex(index: number) {
    console.log('select index', index);
    this.selectedIndex = index;
  }

  constructor() { }

   @ViewChild(MatPaginator) paginator: MatPaginator;

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


export interface PeriodicElement {
  ID: number;
  email: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, email: 'john@me.com', symbol: 'H'},
  {ID: 2, email: 'micheael@gmail.com', symbol: ''},
  {ID: 3, email: 'william@outlook.com', symbol: 'Li'},
  {ID: 4, email: 'david@yahoo.com', symbol: 'Be'},
  {ID: 5, email: 'brown@telnet.com', symbol: 'B'},
  {ID: 6, email: 'john@me.com', symbol: 'C'},
  {ID: 7, email: 'john@me.com', symbol: 'N'},
  {ID: 8, email: 'john@me.com', symbol: 'O'},
  {ID: 9, email: 'john@me.com', symbol: 'F'},
  {ID: 10, email: 'john@me.com', symbol: 'Ne'},
  {ID: 11, email: 'john@me.com', symbol: 'Na'},
  {ID: 12, email: 'john@me.com', symbol: 'Mg'},
  {ID: 13, email: 'john@me.com', symbol: 'Al'},
  {ID: 14, email: 'john@me.com', symbol: 'Si'},
  {ID: 15, email: 'john@me.com', symbol: 'P'},

];

