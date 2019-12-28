import { Component, OnInit } from '@angular/core';
import { LocadoraService, Filmes } from './locadora/locadora.service';
import { pipe } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { MuralService } from './mural/mural.service';
import { Mural } from './mural/mural';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
}
