import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import * as moment from 'moment';
import { SessionService } from '../services/session.service';

@Component({
	selector: 'app-adiciona-contratante',
	templateUrl: './adiciona-contratante.component.html',
	styleUrls: ['./adiciona-contratante.component.scss']
})
export class AdicionaContratanteComponent implements OnInit {

	Nome: string;
	dataNascimento: string;
	Email: string;
	CEP: string;
	Endereco: string;
	Bairro: string;
	Cidade: string;
	Estado: string;
	Referencia: string;
	Numero: number;
	CPF: string;
	dtFim: string;
	Agenda: any;
	id: any;
	idEndereco: any;
	idAgenda: any;
	isUPDATE: boolean;

	constructor(private notifierService: NotifierService, private router: Router, private http: HttpClient, private session: SessionService) { }

	ngOnInit() {
		this.isUPDATE = this.session.selectedArtista != null;
		this.verificaOperacao();
	}

	async adicionarArtista() {
		if (this.isUPDATE) {
			this.sendPut();
		} else {
			this.sendPost();
		}
		this.limpaCampos();
	}

	verificaOperacao() {
		if (this.isUPDATE) {
			this.Nome = this.session.selectedArtista.nome;
			this.CPF = this.session.selectedArtista.cpf;
			this.Email = this.session.selectedArtista.email;
			this.CEP = this.session.selectedArtista.endereco ? this.session.selectedArtista.endereco.cep : '12312-123';
			this.Endereco = this.session.selectedArtista.endereco ? this.session.selectedArtista.endereco.rua : 'Rua do teste';
			this.Numero = this.session.selectedArtista.endereco ? this.session.selectedArtista.endereco.numero : '10';
			this.Bairro = this.session.selectedArtista.endereco ? this.session.selectedArtista.endereco.bairro : 'Bairro do Teste';
			this.Cidade = this.session.selectedArtista.endereco ? this.session.selectedArtista.endereco.cidade : 'São Paulo';
			this.Estado = this.session.selectedArtista.endereco ? this.session.selectedArtista.endereco.uf : 'SP';
			this.Referencia = this.session.selectedArtista.endereco ? this.session.selectedArtista.endereco.referencia : 'Travessa da Rua de Desenvolvimento';
			this.dataNascimento = moment(this.session.selectedArtista.dtNasc).format('DD/MM/YYYY');
			this.id = this.session.selectedArtista.id;
			this.idEndereco = this.session.selectedArtista.endereco ? this.session.selectedArtista.endereco.id : this.session.selectedArtista.id;
			this.idAgenda = this.session.selectedArtista.agenda && this.session.selectedArtista.agenda.length > 0 ? this.session.selectedArtista.agenda[0].id : this.session.selectedArtista.id;
		}
	}

	async sendPut() {
		this.http.put<any>('/artistas', this.getRequestBody())
			.subscribe(data => this.notifierService.notify('success', 'Artista alterado com sucesso!'));
	}

	async sendPost() {
		this.http.post<any>('/artistas', this.getRequestBody())
			.subscribe(data => this.notifierService.notify('success', 'Artista cadastrado com sucesso!'));
	}

	getRequestBody() {
		return {
			agenda: null,
			cpf: this.CPF,
			dtNasc: moment(this.dataNascimento, 'DD/MM/YYYY').format(),
			email: this.Email,
			endereco: null,
			nome: this.Nome,
			id: this.id
		};
	}

	voltar() {
		this.router.navigate(['/login']);
	}

	limpaCampos() {
		this.Nome = '';
		this.CPF = '';
		this.dataNascimento = '';
		this.Email = '';
		this.CEP = '';
		this.Endereco = '';
		this.Numero = 0;
		this.Bairro = '';
		this.Cidade = '';
		this.Estado = '';
	}
}
