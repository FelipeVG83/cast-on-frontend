import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-topper',
	templateUrl: './topper.component.html',
	styleUrls: ['./topper.component.scss']
})
export class TopperComponent implements OnInit {

	constructor(private router: Router) {
	}

	ngOnInit() {
	}

	logout() {
		this.router.navigate(['/login']);
	}

}
