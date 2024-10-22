import { Component } from '@angular/core';
import { Region } from '../../interfaces/region';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-byregionpage',
  templateUrl: './byregionpage.component.html',
  styles: ``
})
export class ByregionpageComponent {

  public region: Region[] = [];

  constructor( private regionService: CountriesService) {}

  seacrhByregion (region: string){
    this.regionService.SearchRegion( region ).subscribe(region => {
      this.region = region;
    });
  }
}
