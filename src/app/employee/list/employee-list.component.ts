import {Component, Injectable, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeApiServiceService} from "../../service/employee-api-service.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{

  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'salary',
    'action'
  ]

  constructor(private employeeApiService: EmployeeApiServiceService) {
  }

  dataSource = new MatTableDataSource<any>;

  ngOnInit() {
    this.loadEmployeeList();
  }

  loadEmployeeList(){
    this.employeeApiService.getEmployees().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      },
      error: (res) => {
        console.log("Failed to load employees");
      }
    })
  }

  deleteEmployee(id: string){
    console.log(id);
    this.employeeApiService.deleteEmployee(id).subscribe({
      next: (val) => {
        this.loadEmployeeList()
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
