import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { CountryI } from '../../interfaces';

@Component({
  selector: 'app-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit {
  public country?: CountryI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');
        // console.log('tenemos 1 pais');
        return (this.country = country);
        // return;
      });
  }
}
