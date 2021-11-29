import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripData } from '../interfaces/tripData';

@Injectable({
  providedIn: 'root',
})
export class HistorialService {
  constructor(private http: HttpClient) {}
  solicitar(trip: TripData): Observable<TripData> {
    console.log('trip submitted');
    return this.http.post<TripData>('http://localhost:3000/Travels', trip);
  }
}
