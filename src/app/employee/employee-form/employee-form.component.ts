import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeApiServiceService} from "../../service/employee-api-service.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SuccessModalComponent} from "../../components/modals/success-modal/success-modal.component";
import {EmployeeListComponent} from "../list/employee-list.component";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  empForm: FormGroup;
  constructor(private _fb: FormBuilder,
              private _employeeApiService: EmployeeApiServiceService,
              @Inject(MAT_DIALOG_DATA) private data:any,
              private _dialogRef:MatDialogRef<EmployeeFormComponent>,
              private _dialog: MatDialog,
              private _d: EmployeeListComponent) {
    this.empForm = this._fb.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      salary: '',
    })
  }

  onFormSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value)
      this._employeeApiService.addEmployee(this.empForm.value).subscribe({
        next: (val) => {
          // alert("Submitted")
          console.log(val);
          const successDialogRef = this._dialog.open(SuccessModalComponent);
          this._dialogRef.close();
          successDialogRef.afterClosed().subscribe({
            next: (val) => {
              if (val) {
                this._d.loadEmployeeList();
              }
            }
          })
        },
        error:console.log
      })
    }
  }
}
