import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TopperComponent } from './topper/topper.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-modules';
import { HttpClientModule } from '@angular/common/http';
import { CalendarioComponent } from './calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FileUploadModule } from 'ng2-file-upload';

import { NotifierModule } from 'angular-notifier';
import { AdicionaNotificacaoComponent } from './adiciona-notificacao/adiciona-notificacao.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AdicionaArtistaComponent } from './adiciona-artista/adiciona-artista.component';
import { ArtistasComponent } from './artistas/artistas.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		MenuComponent,
		TopperComponent,
		CalendarioComponent,
		AdicionaNotificacaoComponent,
		LoginComponent,
		MainComponent,
		AdicionaArtistaComponent,
		ArtistasComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		DemoMaterialModule,
		NgbModule,
		HttpClientModule,
		FullCalendarModule,
		FileUploadModule,
		NotifierModule.withConfig({
			position: {
				horizontal: {
					position: 'right',
					distance: 12
				},
				vertical: {
					position: 'top',
				}
			}
		}
		),
		NgxMaskModule.forRoot(options)

	],
	exports: [
		DemoMaterialModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
