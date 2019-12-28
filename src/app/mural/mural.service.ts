import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mural } from './mural';
import { Pagination } from './pagination';

const apiUrl = 'http://localhost:8080/api/mural';

@Injectable({
  providedIn: 'root'
})
export class MuralService {

  constructor(private http: HttpClient) { }


  save(mural: Mural): Observable<Mural> {

    debugger
    return this.http.post<any>(`${apiUrl}`, mural);
  }

  getAllPagination(): Observable<Pagination> {

    return this.http.get<any>(`${apiUrl}?size=10`);
  }

  getAll(page:number): Observable<Mural[]> {

    return this.http.get<any>(`${apiUrl}?size=10&page=${page}&sorted=id`);
  }

  remove(mural: number): Observable<Mural> {

    return this.http.delete<any>(`${apiUrl}/${mural}`);
  }

}
