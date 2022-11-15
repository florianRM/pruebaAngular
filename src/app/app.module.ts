import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrawlStarsModule } from './brawl-stars/brawl-stars.module';
import { CharactersComponent } from './brawl-stars/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrawlStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
