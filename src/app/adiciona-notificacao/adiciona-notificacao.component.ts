import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
	selector: 'app-adiciona-notificacao',
	templateUrl: './adiciona-notificacao.component.html',
	styleUrls: ['./adiciona-notificacao.component.scss']
})
export class AdicionaNotificacaoComponent implements OnInit {

	Titulo: string;
	Descricao: string;

	constructor(private notifierService: NotifierService) { }

	ngOnInit() {}

	adicionaNotificacao() {
		const obj = {
			Titulo: this.Titulo,
			Descricao: this.Descricao
		}
		this.limpaCampos();
		this.notifierService.notify('success', 'Notificação cadastrada com sucesso!');
	}

	limpaCampos() {
		this.Descricao = '';
		this.Titulo = '';
	}

}
