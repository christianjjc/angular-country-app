import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryI } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: CountryI[] = [];
  public isLoading: boolean = false;

  searchByCapital(capital: string) {
    if (!capital || capital.trim().length < 1) return;
    this.isLoading = true;
    this.countriesService.searchCapital(capital).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
