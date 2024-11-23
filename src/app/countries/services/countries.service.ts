import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { CountryI } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  searchCapital(term: string): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<CountryI[]>(url).pipe(
      catchError((error) => {
        // console.log(error);
        return of([]);
      })
    );
  }
}
