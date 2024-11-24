import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryI } from '../../interfaces';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent implements OnInit {
  public countries: CountryI[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(country: string) {
    if (!country || country.trim().length < 1) return;
    this.isLoading = true;
    this.countriesService.searchCountry(country).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
