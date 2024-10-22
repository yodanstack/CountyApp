import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-bycountriepage',
  templateUrl: './bycountriepage.component.html',
  styles: ``
})
export class BycountriepageComponent {

  public contries: Country[] = [];

  constructor( private CountriesService: CountriesService ){}

  searchByCouentries( term: string ): void {
    this.CountriesService.searchCapital( term ).subscribe(contries =>{
      this.contries = contries;
    })
  }
}
