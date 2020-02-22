import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors() {
  	return ["Brian Aldiss", "Rochelle Alers", "Lloyd Alexander", "Charlotte Vale Allen", "Isabel Allende", "David Almond", "Catherine Anderson", "Maya Angelou"];
  }

}
