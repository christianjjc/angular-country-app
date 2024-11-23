import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  searchByCapital(term: string) {
    if (!term || term.trim().length < 1) return;
    console.log('From ByCapitalPageComponent');
    console.log({ term });
  }
}
