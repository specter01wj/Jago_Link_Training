import { Injectable } from '@angular/core';

import { Character } from './character';

@Injectable()
export class CharacterService {

	getCharacters() {
		return [
		    new Character(1, 'Han Solo', 'light'),
		    new Character(2, 'Luke Skywalker', 'light'),
		    new Character(3, 'Kylo', 'dark'),
		    new Character(4, 'Rey', 'light')
		];
	}

}










