import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from '../services/utilities.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	
	TipoCadastro: string = 'A';

	constructor(private utilities: UtilitiesService, private router: Router) { }

	ngOnInit() {
	}

}
