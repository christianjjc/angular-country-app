import { Component } from '@angular/core';
import { CountryI } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: CountryI[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    if (!region || region.trim().length < 1) return;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
