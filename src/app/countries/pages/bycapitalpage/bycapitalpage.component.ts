import { Component } from '@angular/core';

@Component({
  selector: 'app-bycapitalpage',
  templateUrl: './bycapitalpage.component.html',
  styleUrl: './bycapitalpage.component.css'
})
export class BycapitalpageComponent {

  searchByCapital( term: string): void{
    console.log('desde capital');
    console.log({term});
  }
}
