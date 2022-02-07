export interface Country {
	name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  currencies: {
  	code: string;
  	name: string;
  };
  flag: string;
  area: number;
}
