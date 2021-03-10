import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>
      Employee list
    </h2>

    <ul *ngFor="let employee of employees">
    <li>{{employee.id}} {{employee.name} - {{employee.age}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  public employees=[];
  constructor() { }

  ngOnInit(): void {
  }

}
