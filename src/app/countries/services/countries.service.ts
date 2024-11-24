import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { CountryI } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<CountryI[]>(url).pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

  searchCapital(term: string): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<CountryI[]>(url).pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

  searchCountry(term: string): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<CountryI[]>(url).pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

  searchRegion(term: string): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/region/${term}`;
    return this.httpClient.get<CountryI[]>(url).pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}
