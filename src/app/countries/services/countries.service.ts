import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { CountryI } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  private getCountriesRequest(url: string): Observable<CountryI[]> {
    return this.httpClient.get<CountryI[]>(url).pipe(
      catchError(() => of([])),
      delay(2000)
    );
  }

  searchCountryByAlphaCode(code: string): Observable<CountryI | null> {
    const url: string = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<CountryI[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/capital/${term}`;
    // return this.httpClient.get<CountryI[]>(url).pipe(
    //   catchError((error) => {
    //     return of([]);
    //   })
    // );
    return this.getCountriesRequest(url);
  }

  searchCountry(term: string): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/name/${term}`;
    // return this.httpClient.get<CountryI[]>(url).pipe(
    //   catchError((error) => {
    //     return of([]);
    //   })
    // );
    return this.getCountriesRequest(url);
  }

  searchRegion(term: string): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/region/${term}`;
    // return this.httpClient.get<CountryI[]>(url).pipe(
    //   catchError((error) => {
    //     return of([]);
    //   })
    // );
    return this.getCountriesRequest(url);
  }
}
