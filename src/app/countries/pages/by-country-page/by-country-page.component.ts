import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryI } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: CountryI[] = [];

  searchByCountry(country: string) {
    if (!country || country.trim().length < 1) return;
    this.countriesService.searchCountry(country).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
