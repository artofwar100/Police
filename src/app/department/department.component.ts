import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../Department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  spiners: boolean = false

  departments: Department[] = [];

  constructor(
    private departmentService: DepartmentService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(): void {

    this.spiners = true;

    this.departmentService.getDepartments().subscribe(
      res => {
        this.departments = res;
        this.spiners = false;
      }
    )
  }

  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).subscribe(
      res => {
        this.getDepartments();
      }
    )

  }
}
