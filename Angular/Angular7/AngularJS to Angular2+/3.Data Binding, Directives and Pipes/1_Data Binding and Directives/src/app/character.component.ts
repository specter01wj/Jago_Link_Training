import { Component } from '@angular/core';

class Character {
  constructor(
    public id: number,
    public name: string,
    public side: string,
    public imageUrl: string,
    public link: string
  ) {}
}

class Vehicle {
  constructor(public id: number, public name: string) {}
}

@Component({
  selector: 'story-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterComponent {
  character: Character;
  vehicle: Vehicle;
  color = '#FFF';
  isSelected = false;
  selectLabel = 'Select a Character';

  vehicles = [
    new Vehicle(1, 'Slave 1'),
    new Vehicle(2, 'Imperial Star Destroyer'),
    new Vehicle(3, 'Escape Pod')
  ];

  constructor() {
    this.character = new Character(
      100,
      'Boba Fett',
      'dark',
      'assets/optimum.jpeg',
      'http://angular.io'
    );
    this.vehicle = new Vehicle(
      10011, 'BMW'
    );
  }

  select(name: string) {
    let msg = `You selected ${name}`;
    console.log(msg);
    this.isSelected = !this.isSelected;
  }
}
