import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BycapitalpageComponent } from './pages/bycapitalpage/bycapitalpage.component';
import { BycountriepageComponent } from './pages/bycountriepage/bycountriepage.component';
import { ByregionpageComponent } from './pages/byregionpage/byregionpage.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    BycapitalpageComponent,
    BycountriepageComponent,
    ByregionpageComponent,
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
]
})
export class CountriesModule { }
