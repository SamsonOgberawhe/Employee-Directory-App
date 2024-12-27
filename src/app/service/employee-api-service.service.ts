import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiServiceService {

  constructor(private _httpClient: HttpClient) {
  }

  addEmployee(data: any): Observable<any> {
    return this._httpClient.post("http://localhost:3000/employees", data);
  }

  getEmployees(): Observable<any> {
    return this._httpClient.get("http://localhost:3000/employees");
  }

  deleteEmployee(id: string): Observable<any>{
    return this._httpClient.delete(`http://localhost:3000/employees/${id}`)
  }
}
