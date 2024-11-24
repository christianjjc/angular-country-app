import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CacheStoreI, CountryI, RegionT } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {
    this.loadFromLS();
  }

  public cacheStore: CacheStoreI = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  private saveToLS() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLS() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountriesRequest(url: string): Observable<CountryI[]> {
    return this.httpClient.get<CountryI[]>(url).pipe(
      catchError(() => of([]))
      // delay(2000)
    );
  }

  searchCountryByAlphaCode(code: string): Observable<CountryI | null> {
    const url: string = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<CountryI[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(capital: string): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/capital/${capital}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCapital = {
            term: capital,
            countries: countries,
          })
      ),
      tap(() => this.saveToLS())
    );
  }

  searchCountry(country: string): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/name/${country}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountries = {
            term: country,
            countries: countries,
          })
      ),
      tap(() => this.saveToLS())
    );
  }

  searchRegion(region: RegionT): Observable<CountryI[]> {
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byRegion = {
            region: region,
            countries: countries,
          })
      ),
      tap(() => this.saveToLS())
    );
  }
}

/* searchCapital(term: string): Observable<CountryI[]> {
  const url: string = `${this.apiUrl}/capital/${term}`;
  return this.httpClient.get<CountryI[]>(url).pipe(
    catchError((error) => {
      return of([]);
    })
  );
} */
