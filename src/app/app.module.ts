import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDeatilsComponent } from './department/department-deatils/department-deatils.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEditDepartmentComponent } from './department/create-edit-department/create-edit-department.component';
import { OfficersComponent } from './officers/officers.component';
import { OfficerDeatilsComponent } from './officers/officer-deatils/officer-deatils.component';
import { OfficerCreateEditComponent } from './officers/officer-create-edit/officer-create-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DepartmentDeatilsComponent,
    CreateEditDepartmentComponent,
    OfficersComponent,
    OfficerDeatilsComponent,
    OfficerCreateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
