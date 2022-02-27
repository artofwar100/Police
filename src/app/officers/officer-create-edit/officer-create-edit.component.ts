import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Department';
import { DepartmentService } from 'src/app/department.service';
import { pageMode } from 'src/app/department/create-edit-department/pageMode';
import { OfficerService } from 'src/app/officer.service';

@Component({
  selector: 'app-officer-create-edit',
  templateUrl: './officer-create-edit.component.html',
  styleUrls: ['./officer-create-edit.component.css']
})
export class OfficerCreateEditComponent implements OnInit {

  pagemode: pageMode = pageMode.Create

  pageModeEnum = pageMode;

  officerID: number = 0;

  departments: Department[] = [];

  constructor(
    private officerSRV: OfficerService,
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router,
    private departmentSRV: DepartmentService
  ) { }

  officerForm = this.fb.group({
    id: [0],
    name: [''],
    age: [''],
    departmentId:['']
  })

  ngOnInit(): void {
    this.setPageMode()
    this.getLookUps()
  }

  createEditOfficer(): void {
    if (this.pagemode == pageMode.Create) {
      this.officerSRV.addOfficer(this.officerForm.value).subscribe(
        res => {
          this.route.navigate(['/officers'])
        }
      )
    }
    else if (this.pagemode == pageMode.Edit) {
      this.officerSRV.editOfficer(this.officerForm.value).subscribe(
        res => {
          this.route.navigate(['/officers'])
        }
      )
    }
  }

  setPageMode(): void {
    if (this.router.snapshot.paramMap.get('id')) {
      this.officerID = parseInt(this.router.snapshot.paramMap.get('id') as string);
      this.pagemode = pageMode.Edit;
      this.pageModeEdit();
    }
  }

  pageModeEdit(): void {
    this.officerSRV.getOfficer(this.officerID).subscribe(
      res => {
        this.officerForm.patchValue({
          id: res.id,
          name: res.name,
          age: res.age,
          departmentId: res.department.id
        })
      }
    )
  }

  getLookUps(): void {
    this.getDepartmentLookUp()
  }

  private getDepartmentLookUp(): void {
    this.departmentSRV.getDepartments().subscribe(
      res => {
        this.departments = res
      }
    )
  }



}
