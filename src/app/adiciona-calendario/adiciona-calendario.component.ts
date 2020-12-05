import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
	selector: 'app-adiciona-calendario',
	templateUrl: './adiciona-calendario.component.html',
	styleUrls: ['./adiciona-calendario.component.scss']
})
export class AdicionaCalendarioComponent implements OnInit {

	Evento: string;
	DataInicial: string;
	DataFinal: string;

	constructor(private notifierService: NotifierService) { }

	ngOnInit() {
	}

	async adicionarCalendario() {
		this.limpaCampos();
		this.notifierService.notify('success', 'Evento cadastrado com sucesso!');
	}

	limpaCampos() {
		this.Evento = '';
		this.DataInicial = '';
		this.DataFinal = '';
	}
}
