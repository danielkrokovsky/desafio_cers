import { Component, OnInit, Input } from '@angular/core';
import { LocadoraService, Filmes } from './locadora.service';

@Component({
  selector: 'app-locadora',
  templateUrl: './locadora.component.html',
  styleUrls: ['./locadora.component.css']
})
export class LocadoraComponent implements OnInit {

  @Input()
  listaFilmes : Filmes[];

  constructor() { }

  ngOnInit() {
  }

}
