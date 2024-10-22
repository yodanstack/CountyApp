import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BycapitalpageComponent } from './pages/bycapitalpage/bycapitalpage.component';
import { BycountriepageComponent } from './pages/bycountriepage/bycountriepage.component';
import { ByregionpageComponent } from './pages/byregionpage/byregionpage.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from "../shared/shared.module";
import { CountryTableComponent } from './components/country-table/country-table.component';
import { RegionTableComponent } from './components/region-table/region-table.component';




@NgModule({
  declarations: [
    BycapitalpageComponent,
    BycountriepageComponent,
    ByregionpageComponent,
    CountryPageComponent,
    CountryTableComponent,
    RegionTableComponent,
    CountryTableComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,

],
exports:[
  CountryTableComponent,

]
})
export class CountriesModule { }
