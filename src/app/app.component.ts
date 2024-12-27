import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EmployeeFormComponent} from "./employee/employee-form/employee-form.component";
import {SuccessModalComponent} from "./components/modals/success-modal/success-modal.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employee-Directory';


  constructor(private _dialog: MatDialog) {}
  openAddForm(){
    this._dialog.open(EmployeeFormComponent)
  }
}
