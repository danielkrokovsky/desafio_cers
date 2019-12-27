import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocadoraService {

  constructor(private http : HttpClient) { }

  load(filtro: string): Observable<Search> {
    
      return this.http.get<Search>(`http://www.omdbapi.com/?s=${filtro}&type=movie&apikey=cc0237ff`);
  }
}

export interface Search {
  
  filmes : Filmes[];

}

export interface Filmes {
  
  Title:string,
  Year:string;
  Rated:string;
  Released:string;
  Runtime:string;
  Genre:string;
  Director:string;
  Writer:string;
  Actors:string;
  Plot:string;
  Language:string;
  Country:string;
  Awards:string;
  Poster:string;

}