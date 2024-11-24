import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryI } from '../../interfaces';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent implements OnInit {
  public countries: CountryI[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(capital: string) {
    if (!capital || capital.trim().length < 1) return;
    this.isLoading = true;
    this.countriesService.searchCapital(capital).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
