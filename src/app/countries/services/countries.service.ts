import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable, of } from 'rxjs';

import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCapital( term: string ): Observable<Country[]> {

    const url = (`${this.apiUrl}/capital/${term}`);

    return this.http.get<Country[]>( url ).pipe(catchError( error => of([]) ));
  }

  // searchCountriey( term: string ): Observable<Country[]>{

  // }

  SearchRegion(region: string):Observable<Region[]>{

    return this.http.get<Region[]>(`${this.apiUrl}/region/${ region }`);
  }
}
