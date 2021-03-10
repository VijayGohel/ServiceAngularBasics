import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  getEmployees()
  {
    return [
      {'id':1, 'name':'Peter', 'age':35},
      {'id':2, 'name':'Brian', 'age':10},
      {'id':3, 'name':'Meg', 'age':25},
      {'id':4, 'name':'Lois', 'age':40}
    ];
  }
}
