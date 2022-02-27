import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Officer } from './officer';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  private url = "https://localhost:44304/api/Officers"

  constructor(private http: HttpClient) { }

  getOfficers(): Observable<Officer[]> {
    return this.http.get<Officer[]>(this.url + '/GetOfficers')
  }

  getOfficer(id: number): Observable<Officer> {
    return this.http.get<Officer>(this.url + '/GetOfficers/' + id)
  }

  editOfficer(officer: Officer): Observable<Officer> {
    return this.http.put<Officer>(this.url + '/PutOfficers/' + officer.id, officer)
  }

  addOfficer(officer: Officer): Observable<Officer> {
    return this.http.post<Officer>(this.url + '/PostOfficers', officer)
  }
  
  deleteOfficer(id: number): Observable<Officer> {
    return this.http.delete<Officer>(this.url + '/DeleteOfficers/' + id)
  }
}
