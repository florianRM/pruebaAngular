import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interface/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  constructor() { }

  @Input() characters: Character[] = [];

}
