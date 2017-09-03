import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ServicoService {
	private url:string='http://echo.jsontest.com/nome/daniel/teste/batata';
	private idadeMinima:string = '';
	private idadeMaxima:string = '';
	private vacina:string = '';
	private regiao:string = '';
	private sexo:string = '';


	constructor(private http:Http) { }

	getFinalUrl(){
		return this.url +'/?vacina=' +this.vacina;
	}

	getInfo(){
		return this.http.get(this.url).map( (response:Response) => response.json() );
	}
}
