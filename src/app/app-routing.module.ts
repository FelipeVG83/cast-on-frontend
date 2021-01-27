import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AdicionaArtistaComponent } from './adiciona-artista/adiciona-artista.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'main', component: MainComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'artistas/adicionar', component: AdicionaArtistaComponent },
	{ path: 'artistas', component: ArtistasComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
