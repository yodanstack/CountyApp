import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ContactPageComponent,
    HomePageComponent,
    HomePageComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
