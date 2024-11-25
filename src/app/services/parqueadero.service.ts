import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parqueadero } from './parqueadero.model';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getAvailableParkingSpots(): Observable<Parqueadero[]> {
    return this.http.get<Parqueadero[]>(`${this.apiUrl}/available-parking-spots/`);
  }

  getParkingSpotDetail(id: number): Observable<Parqueadero> {
    return this.http.get<Parqueadero>(`${this.apiUrl}/parking-spot-detail/${id}/`);
  }

  createParkingSpot(parqueadero: Parqueadero): Observable<Parqueadero> {
    return this.http.post<Parqueadero>(`${this.apiUrl}/create-parking-spot/`, parqueadero);
  }

  updateParkingSpot(id: number, parqueadero: Parqueadero): Observable<Parqueadero> {
    return this.http.put<Parqueadero>(`${this.apiUrl}/update-parking-spot/${id}/`, parqueadero);
  }

  deleteParkingSpot(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-parking-spot/${id}/`);
  }
}
