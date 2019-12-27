import { Component, OnInit } from '@angular/core';
import { LocadoraService, Filmes } from './locadora/locadora.service';
import { pipe } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  filtro : string;
  listaFilmes : Filmes[];
  poster = 'http://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png';

  constructor(private locadoraService: LocadoraService) { }

  pesquisar(){

    this.locadoraService.load(this.filtro).subscribe(pipe(value => {

      this.listaFilmes = value["Search"];

      this.listaFilmes.forEach(x => {

        if(x.Poster == 'N/A'){
          x.Poster = this.poster;
        }
      } );

    }));
    
  }
  
}
