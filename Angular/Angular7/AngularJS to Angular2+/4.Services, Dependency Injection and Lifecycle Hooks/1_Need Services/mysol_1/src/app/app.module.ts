import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list.component';
import { CharacterComponent } from './character.component';

import { CharacterService } from './character.service';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, CharacterListComponent, CharacterComponent],
	providers: [CharacterService],
	bootstrap: [AppComponent]
})

export class AppModule {}
