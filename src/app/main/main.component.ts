import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  title = 'Cast ON';
	componente = 'dashboard';

	constructor() {	}

	mudarComponente(event) {
		this.componente = event;
	}

}
