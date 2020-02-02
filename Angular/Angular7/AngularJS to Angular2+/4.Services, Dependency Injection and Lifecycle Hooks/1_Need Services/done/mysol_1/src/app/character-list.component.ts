import { Component } from '@angular/core';

import { Character } from './character';

import { CharacterService } from './character.service';

@Component({
	selector: 'my-character-list',
	templateUrl: './character-list.component.html',
	styles: ['li {cursor: pointer;']
})


export class CharacterListComponent {

	/*characters = [
    new Character(1, 'Han Solo', 'light'),
    new Character(2, 'Luke Skywalker', 'light'),
    new Character(3, 'Kylo', 'dark'),
    new Character(4, 'Rey', 'light')
  ];*/
  characters: Array<Character>
  messages: string[] = [];
  selectedCharacter: Character;

  constructor(private characterService: CharacterService) {
  	this.characters = this.characterService.getCharacters();
    this.messages = this.characterService.getMessages();
  }

  select(character: Character) {
  	this.selectedCharacter = character;
  }

}

