import { Component, input } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [],
  templateUrl: './square.html',
  styleUrl: './square.css',
})
export class Square {
  /* input() tarkoittaa, että value-propertyn arvo
     tulee signaalimuotoisena syötteenä sisään 
     äitikomponentilta eli board-komponentilta.
  */
  value = input();
}
