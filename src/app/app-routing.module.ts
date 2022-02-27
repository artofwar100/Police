import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditDepartmentComponent } from './department/create-edit-department/create-edit-department.component';
import { DepartmentDeatilsComponent } from './department/department-deatils/department-deatils.component';
import { DepartmentComponent } from './department/department.component';
import { OfficerCreateEditComponent } from './officers/officer-create-edit/officer-create-edit.component';
import { OfficerDeatilsComponent } from './officers/officer-deatils/officer-deatils.component';
import { OfficersComponent } from './officers/officers.component';

const routes: Routes = [
  { path: 'departments', component: DepartmentComponent },
  { path: 'detail/:id', component: DepartmentDeatilsComponent },
  { path: 'DepCreate', component: CreateEditDepartmentComponent },
  { path: 'DepEdit/:id', component: CreateEditDepartmentComponent },

  { path: 'officers', component: OfficersComponent },
  { path: 'officer/:id', component: OfficerDeatilsComponent },
  { path: 'offCreate', component: OfficerCreateEditComponent },
  { path: 'offEdit/:id', component: OfficerCreateEditComponent },
  

  { path: '', redirectTo: '/departments', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
