import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mural } from './mural';

@Injectable({
  providedIn: 'root'
})
export class MuralService {

  constructor(private http: HttpClient) { }


  save(mural: Mural): Observable<Mural> {
    
    return this.http.post<any>(`http://10.0.0.110:8080/api/mural`, mural);
}

}
