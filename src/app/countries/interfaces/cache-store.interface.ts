import { CountryI } from './country.interface';
import { Region } from './region.type';

export interface CacheStoreI {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegioCountries;
}

export interface TermCountries {
  term: string;
  countries: CountryI[];
}

export interface RegioCountries {
  region?: Region;
  countries: CountryI[];
}
