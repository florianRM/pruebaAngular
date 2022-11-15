import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interface/character';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor() { }

  newCharacter: Character = {
    name: 'Rico',
    health: 1200
  }

  characters: Character[] = [
    { name: 'Shelly', health: 3600 },
    { name: 'El primo', health: 5800 },
    { name: 'Piper', health: 900 },
    { name: 'Rico', health: 2600 }
  ]

}
