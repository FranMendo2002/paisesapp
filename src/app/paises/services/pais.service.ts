import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  get getParams() {
    return new HttpParams()
      .set('fields', 'name,capital,cca2,flags,population');
  }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.getParams });
  }

  buscarCapital(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.getParams });
  }

  getPaisPorCodigo(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }

  buscarRegion(region: string): Observable<Pais[]> {

    const url = `${this.apiUrl}/region/${region}?fields=name,capital,cca2,flags,population`;
    return this.http.get<Pais[]>(url, { params: this.getParams });
  }
}
