import { Injectable } from '@angular/core';
import { TripData } from '../interfaces/tripData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../interfaces/equipo';

@Injectable({
  providedIn: 'root',
})
export class TravelsService {
  constructor(private http: HttpClient) {}

  solicitar(trip: TripData): Observable<TripData> {
    return this.http.post<TripData>(
      'api/Retirement?clientId=' +trip.id +'&mark=' + trip.marca +  '&model=' +  trip.modelo +  '&failure=' +  trip.falla,  trip
    );
  }

  estado(id:number): Observable<Equipo[]> {
    return this.http.get<Equipo[]>('api/Equipment?clientId=' + id);
  }
}
