import { Component } from '@angular/core';
import { CountryI } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: CountryI[] = [];

  searchByRegion(region: string) {
    if (!region || region.trim().length < 1) return;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
