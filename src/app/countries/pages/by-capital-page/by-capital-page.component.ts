import { Component, ElementRef, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryI } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  constructor(private countriresService: CountriesService) {}

  public countries: CountryI[] = [];

  searchByCapital(term: string) {
    if (!term || term.trim().length < 1) return;
    // console.log('From ByCapitalPageComponent');
    this.countriresService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
    console.log({ term });
  }
}
