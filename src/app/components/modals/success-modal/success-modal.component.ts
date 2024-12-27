import {Component, OnDestroy} from '@angular/core';
import {EmployeeListComponent} from "../../../employee/list/employee-list.component";

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnDestroy{
  ngOnDestroy(): void {
  }

  // constructor(private _employeeList: EmployeeListComponent) {
  // }
  // ngOnDestroy(): void {
  //   this._employeeList.loadEmployeeList();
  // }


}
