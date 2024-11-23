import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CountryI } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  standalone: false,
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.css',
})
export class CountriesTableComponent {
  @Input()
  public countries: CountryI[] = [];
}
