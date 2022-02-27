import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/Department';
import { DepartmentService } from 'src/app/department.service';

@Component({
  selector: 'app-department-deatils',
  templateUrl: './department-deatils.component.html',
  styleUrls: ['./department-deatils.component.css']
})
export class DepartmentDeatilsComponent implements OnInit {

  department : Department | undefined;

  constructor(private departmentService : DepartmentService,
              private route : ActivatedRoute 
    ) { }

  ngOnInit(): void {
    this.getDepartment();
  }

  getDepartment()
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.departmentService.getDepartment(id).subscribe(
      res => {
        this.department = res
      }
    )
  }

}
