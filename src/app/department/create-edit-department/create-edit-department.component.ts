import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { FormBuilder } from '@angular/forms';
import { Department } from 'src/app/Department';
import { ActivatedRoute, Router } from '@angular/router';
import { pageMode } from './pageMode';

@Component({
  selector: 'app-create-edit-department',
  templateUrl: './create-edit-department.component.html',
  styleUrls: ['./create-edit-department.component.css']
})
export class CreateEditDepartmentComponent implements OnInit {

  pagemode: pageMode = pageMode.Create

  pageModeEnum = pageMode;

  departmentID: number = 0;




  constructor(private departmentService: DepartmentService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  departmentForm = this.fb.group({
    id: [0],
    name: [""],
    location: [""]
  })

  ngOnInit(): void {
    this.setPageMode();  
  }

  createEditDepartment(): void {
    if (this.departmentForm.valid) {
      if (this.pagemode == pageMode.Create) {
        this.departmentService.addDepartment(this.departmentForm.value).subscribe(
          res => {
            this.router.navigateByUrl('departments');
          }
        )
      }
      else if (this.pagemode == pageMode.Edit) {
        this.departmentService.editDepartment(this.departmentForm.value).subscribe(
          res => {
            this.router.navigateByUrl('departments');
          }
        )
      }
    }


  }

  private setPageMode(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.departmentID = parseInt(this.route.snapshot.paramMap.get('id') as string);
      this.pagemode = pageMode.Edit
      this.preparePageForEdit();
      // TODO
    }
  }

  private preparePageForEdit(): void {
    this.departmentService.getDepartment(this.departmentID).subscribe(
      res => {
        this.departmentForm.patchValue({
          id: res.id,
          name: res.name,
          location: res.loction
        })
      }
    )
  }



}
