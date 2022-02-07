import { Component, OnInit } from '@angular/core';

import { Country } from '../../interface/country';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-asia-list',
  templateUrl: './asia-list.component.html',
  styleUrls: ['./asia-list.component.less']
})
export class AsiaListComponent implements OnInit {
	pageTitle = 'Asia Country List';
	region: string = 'Asia';
	errorMessage = '';
	filteredCountry: Country[] = [];
	imageWidth = 50;
  imageMargin = 2;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
  	this.getCountryList(this.region);
  }

  getCountryList(type: string) {
  	this.filteredCountry = [];
  	this.countriesService.getCountries(type).subscribe({
  		next: countries => {
  			countries.map((country: Country) => {
  				this.filteredCountry.push(
        		{ name: country.name, capital: country.capital, 
        			region: country.region, subregion: country.subregion,
        			population: country.population, currencies: country.currencies,
        			flag: country.flag, area: country.area
        		});
  			});
  		},
  		error: err => this.errorMessage = err
  	});
  }

}
