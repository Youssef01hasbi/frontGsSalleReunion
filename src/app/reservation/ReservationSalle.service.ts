import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReservationSalle} from "./ReservationSalle";


@Injectable({providedIn : 'root'})
export class ReservationSalleService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getReservationSalle(): Observable<ReservationSalle[]>{
    return this.http.get<ReservationSalle[]>(`${this.apiServerUrl}/ReservationSalle/all`);
  }

  public addReservationSalle(salleReunion : ReservationSalle): Observable<ReservationSalle>{
    return this.http.post<ReservationSalle>(`${this.apiServerUrl}/ReservationSalle/add`, salleReunion);
  }

  public updateReservationSalle(salleReunion : ReservationSalle): Observable<ReservationSalle>{
    return this.http.put<ReservationSalle>(`${this.apiServerUrl}/ReservationSalle/update`, salleReunion);
  }

  public deleteReservationSalle(ReservationSalleId : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/SalleReunion/delete/${ReservationSalleId}`);
  }
}
