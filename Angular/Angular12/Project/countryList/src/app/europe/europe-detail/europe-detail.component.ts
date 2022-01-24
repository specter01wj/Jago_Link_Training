import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../../interface/country';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-europe-detail',
  templateUrl: './europe-detail.component.html',
  styleUrls: ['./europe-detail.component.less']
})
export class EuropeDetailComponent implements OnInit {
	pageTitle = 'Country Detail';
	country: Country;
	errorMessage: string;

  constructor(private countriesService: CountriesService,
  						private route: ActivatedRoute) { }

  ngOnInit(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.getCountry(id);
  }

  getCountry(id: number) {
  	this.countriesService.getCountry(id).subscribe({
  		next: country => this.onCountryRetrieved(country),
  		error: err => this.errorMessage = err
  	});
  }

  onCountryRetrieved(country: Country): void {
  	this.country = country;
  	if (this.country) {
      this.pageTitle = `Country Detail: ${this.country.name}`;
    } else {
      this.pageTitle = 'No country found!';
    }
  }

}
