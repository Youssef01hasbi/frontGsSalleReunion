import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Personne} from "../Personnes/Personne";
import {Departments} from "./departments";


@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getDepartment(): Observable<Departments[]>{
    return this.http.get<Departments[]>(`${this.apiServerUrl}/Departments/all`);
  }

  public addDepartments(departments : Departments): Observable<Departments>{
    return this.http.post<Departments>(`${this.apiServerUrl}/Departments/add`, departments);
  }

  public updateDepartments(departments : Departments): Observable<Departments>{
    return this.http.put<Departments>(`${this.apiServerUrl}/Departments/update`, departments);
  }

  public deleteDepartments(DepartmentId : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Departments/delete/${DepartmentId}`);
  }
}
