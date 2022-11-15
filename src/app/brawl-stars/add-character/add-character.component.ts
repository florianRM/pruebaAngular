import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interface/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  constructor() { }

  @Input() newCharacter: Character = {
    name: '',
    health: 0
  }

  @Input() characters: Character[] = [];

  addCharacter() {
    let auxCharacter: Character = {
      name: this.newCharacter.name,
      health: this.newCharacter.health
    }

    this.characters.push(auxCharacter);
  }
}
