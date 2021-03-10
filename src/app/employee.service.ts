import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private _url :string ="/assets/data/employees.json";

  getEmployees():Observable<IEmployees[]>
  {
    return this.http.get<IEmployees[]>(this._url);
  }
}
