import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { BycapitalpageComponent } from './pages/bycapitalpage/bycapitalpage.component';
import { BycountriepageComponent } from './pages/bycountriepage/bycountriepage.component';
import { ByregionpageComponent } from './pages/byregionpage/byregionpage.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component:BycapitalpageComponent
  },
  {
    path:'by-country',
    component: BycountriepageComponent
  },
  {
    path:'by-region',
    component: ByregionpageComponent
  },
  {
    path:'by/:id',
    component: CountryPageComponent
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  }

]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
