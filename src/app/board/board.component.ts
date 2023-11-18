/*
Board on ns. toiminnallinen eli "älykäs" komponentti joka sisältää
sovelluslogiikan.
*/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../square/square.component';

@Component({
    standalone: true,
    imports: [CommonModule, SquareComponent],
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
    
    /* Propertyt eivät voi olla undefined (!-merkintä), koska ne alustetaan
       newGame() -metodissa aina kun peli alkaa. Niitä on siis turha alustaa
       konstruktorissa 
    */
    squares!: string[]; // Taulukko jossa on pelin tila, eli arvoja: '', 'X', '0'
    xIsNext!: boolean; // Kertoo kumpi on seuraavaksi vuorossa
    winner!: string; // Kertoo voittajan '', 'X' tai '0'

    constructor() {}

    ngOnInit() {
        this.newGame(); // newGame suoritetaan aina kun komponentti latautuu muistiin
    }
    // newGame() -metodin suoritus käynnistää uuden pelin
    newGame() {
        // Kun uusi peli alkaa, pelin muuttujat alustetaan.
        // Squares-taulukkoon laitetaan 9 tyhjää paikkaa
        this.squares = Array(9).fill('');
        this.xIsNext = true;
        this.winner = '';
    }

    /*
   Tässä on sovelluksen model eli tietomalli. Se muodostuu
   risteistä ja nollista jotka välitetään ruutuihin player-
   get propertyn kautta. Get property joka on TS:n piirre,
   tarjoilee vuorotellen ristin tai nollan.
   */
    get player() {
        // ternäärinen operaattori joka korvaa if-elsen
        return this.xIsNext ? 'X' : '0';
        /*
        if (this.xIsNext) {
            return 'X';
        } else {
            return '0';
        }
        */
    }

    // makeMove(index: number) laittaa ristin tai nollan squares -taulukkoon indeksiin index
    makeMove(index: number) {
        // Paikan johon risti tai nolla laitetaan pitää olla tyhjä, eli ''
        if (!this.squares[index]) {
            // splice-metodi poistaa indeksistä alkion ja laittaa
            // tilalle yhden alkion joka tulee this.player -get propertyltä
            this.squares.splice(index, 1, this.player);
            this.xIsNext = !this.xIsNext; // Vaihdetaan vuoroa
        }
        // Yritetään määritellä voittaja. Metodi tuottaa 'X', '0' tai ''
        // tilanteesta riippuen. Jos voittaja on olemassa, se näytetään templaatissa.
        this.winner = this.calculateWinner();
    }
    
    // Metodi joka määrittää pelin voittajan
    calculateWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const line of lines) {
            const [a, b, c] = line;
            if (
                this.squares[a] &&
                this.squares[a] === this.squares[b] &&
                this.squares[a] === this.squares[c]
            ) {
                return this.squares[a]; // palautetaan 'X' tai '0'
            }
        }
        return ''; // ei voittajaa
    }
}
