import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

	idadeMinima	: number 	= 0
	idadeMaxima	: number 	= 100
	vacina 		: string 	= "Tetano"
	regiao		: string 	= "Sao Paulo"
	sexo		: string 	= "Masculino"


	BotaoClicado(){
		alert(
			"Idade minima: " 	+ this.idadeMinima + "\n" +
			"Idade maxima: " 	+ this.idadeMaxima + "\n" +
			"Vacina: " 			+ this.vacina + "\n" +
			"Regiao: " 			+ this.regiao + "\n" +
			"Sexo: " 			+ this.sexo
		);
	}

  	constructor() { }

  	ngOnInit() {
  	}

}
