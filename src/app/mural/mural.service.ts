import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mural } from './mural';
import { Pagination } from './pagination';

@Injectable({
  providedIn: 'root'
})
export class MuralService {

  constructor(private http: HttpClient) { }


  save(mural: Mural): Observable<Mural> {

    return this.http.post<any>(`http://10.0.0.110:8080/api/mural`, mural);
  }

  getAllPagination(): Observable<Pagination> {

    return this.http.get<any>(`http://10.0.0.110:8080/api/mural?size=10`);
  }

  getAll(page:number): Observable<Mural[]> {

    return this.http.get<any>(`http://10.0.0.110:8080/api/mural?size=10&page=${page}&sorted=id`);
  }

  remove(mural: number): Observable<Mural> {

    return this.http.delete<any>(`http://10.0.0.110:8080/api/mural/${mural}`);
  }

}
