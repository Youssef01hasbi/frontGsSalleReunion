import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SalleReunion} from "./SalleReunion";

@Injectable({providedIn : 'root'})
export class SalleReunionService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getSalleReunion(): Observable<SalleReunion[]>{
    return this.http.get<SalleReunion[]>(`${this.apiServerUrl}/SalleReunion/all`);
  }

  public addSalleReunion(salleReunion : SalleReunion): Observable<SalleReunion>{
    return this.http.post<SalleReunion>(`${this.apiServerUrl}/SalleReunion/add`, salleReunion);
  }

  public updateSalleReunion(salleReunion : SalleReunion): Observable<SalleReunion>{
    return this.http.put<SalleReunion>(`${this.apiServerUrl}/SalleReunion/update`, salleReunion);
  }

  public deleteSalleReunion(salleId : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/SalleReunion/delete/${salleId}`);
  }
}
