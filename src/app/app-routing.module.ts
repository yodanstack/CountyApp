import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/components/contact-page/contact-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  {
    path: 'About',
    component: AboutPageComponent
  },
  {
    path: 'Contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    loadChildren:() => import('./countries/countries.module').then(m => m.CountriesModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
