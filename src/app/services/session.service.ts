import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  idUsuario: string;

  selectedArtista: any;

  constructor() { }
}

