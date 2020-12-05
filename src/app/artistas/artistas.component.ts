import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
	selector: 'app-artistas',
	templateUrl: './artistas.component.html',
	styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {
	@Output() mudaComponente = new EventEmitter();

	CarrosObj: any;
	Carros: any[];
	dataSource: any;
	selection = new SelectionModel<any>(true, []);
	displayedColumns: string[] = ['Seleciona', 'ID', 'Nome', 'CPF'];
	Artista: any[];
	Pesquisa: string;

	constructor(private notifierService: NotifierService, private http: HttpClient, private session: SessionService) { }

	ngOnInit() {}

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	/** The label for the checkbox on the passed row */
	checkboxLabel(row): string {
		if (!row) {
			return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
		}
		return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
	}

	deletar() {
		for (let i = 0; i < this.selection.selected.length; i++) {
			const element = this.selection.selected[i];
			this.http.delete('/artistas/' + element.id).subscribe(() => this.notifierService.notify('success', 'Artista removido com sucesso!'));
		}
		this.Artista = [];
		this.dataSource = new MatTableDataSource(this.Artista);
	}

	adicionar() {
		if (this.selection.hasValue()) {
			this.session.selectedArtista = this.selection.selected[0];
		} else { this.session.selectedArtista = null; }
		this.mudaComponente.emit('artistas/adicionar');
	}

	listar() {
		this.Artista = [];
		this.dataSource = new MatTableDataSource(null);
		this.http.get<any>('/artistas/' + this.Pesquisa).subscribe(data => {
			if (data) {
				this.Artista = [data];
				this.dataSource = new MatTableDataSource(this.Artista);
			}
		});
	}

}
