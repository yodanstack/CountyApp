import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, Observable, of } from 'rxjs';

import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }


  searchCountryAlphaCode(code: string): Observable<Country | null> {
    const url = (`${this.apiUrl}/alpha/${code}`);

    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null )
      ,catchError(() => of(null))
    );

  }

  searchCapital(term: string): Observable<Country[]> {

    const url = (`${this.apiUrl}/capital/${term}`);

    return this.http.get<Country[]>(url).pipe(catchError(error => of([])));
  }

  searchCountriey(term: string): Observable<Country[]> {
    const url = (`${this.apiUrl}/name/${term}`);

    return this.http.get<Country[]>(url).pipe(catchError(error => of([])));
  }

  SearchRegion(region: string): Observable<Region[]> {
    const url = (`${this.apiUrl}/region/${region}`);

    return this.http.get<Region[]>(url).pipe(catchError(error => of([])));
  }
}
