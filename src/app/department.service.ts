import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './Department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private url = 'https://localhost:44304/api/Departments';

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url + '/GetDepartments');
  }

  getDepartment(id: number): Observable<Department> {
    return this.http.get<Department>(this.url + '/GetDepartment/' + id);
  }

  editDepartment(department: Department): Observable<Department> {
    return this.http.put<Department>(this.url + '/PutDepartment/' + department.id, department)
  }

  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.url + '/PostDepartment', department)
  }

  deleteDepartment(id: number): Observable<Department> {
    return this.http.delete<Department>(this.url + '/DeleteDepartment/' + id);
  }
}
