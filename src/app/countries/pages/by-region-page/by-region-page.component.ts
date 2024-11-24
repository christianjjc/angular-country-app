import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryI, RegionT } from '../../interfaces';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent implements OnInit {
  public countries: CountryI[] = [];
  public regions: RegionT[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: RegionT;
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: RegionT) {
    this.selectedRegion = region;
    this.isLoading = true;
    if (!region || region.trim().length < 1) return;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
