import id from '@angular/common/locales/id';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {


  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private CountriesService: CountriesService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.CountriesService.searchCountryAlphaCode(id)),
     )
    .subscribe(( country ) => {
        if(!country ) {
          return this.router.navigateByUrl('');
        }
        this.country = this.country
        return
    });
  }
}
