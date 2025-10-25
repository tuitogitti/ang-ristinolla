import { Component } from '@angular/core';
import { Board } from './board/board';

@Component({
  // komponentin konffi
  selector: 'app-root', // komponentin HTML-tagi
  imports: [Board], // komponentin riippuvuudet
  templateUrl: './app.html', // HTML-osa
  styleUrl: './app.css', // CSS-osa
})
export class App {
  title = 'Ristinolla';
}
