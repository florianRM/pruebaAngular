import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BrawlStarsModule { }
