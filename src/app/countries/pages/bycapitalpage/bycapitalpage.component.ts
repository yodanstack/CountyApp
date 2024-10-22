import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-bycapitalpage',
  templateUrl: './bycapitalpage.component.html',
  styleUrl: './bycapitalpage.component.css'
})


export class BycapitalpageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  searchByCapital( term: string): void{
    this.countriesService.searchCapital( term ).subscribe( countries => {
      this.countries = countries;
    } );
    // console.log(term);
  }
}
