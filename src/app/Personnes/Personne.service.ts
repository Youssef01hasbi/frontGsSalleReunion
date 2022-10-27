import { Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Personne} from "./Personne";
import {environment} from "../../environments/environment";

@Injectable({providedIn : 'root'})
export class PersonneService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getPersonne(): Observable<Personne[]>{
    return this.http.get<Personne[]>(`${this.apiServerUrl}/personne/all`);
  }

  public addPersonne(personne : Personne): Observable<Personne>{
    return this.http.post<Personne>(`${this.apiServerUrl}/personne/add`, personne);
  }

  public updatePersonne(personne : Personne): Observable<Personne>{
    return this.http.put<Personne>(`${this.apiServerUrl}/personne/update`, personne);
  }

  public deletePersonne(personneId : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/personne/delete/${personneId}`);
  }
}

