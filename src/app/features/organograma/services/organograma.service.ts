import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IChart } from '../interfaces/chart';

@Injectable({
  providedIn: 'root'
})
export class OrganogramaService {

  constructor(
    private http: HttpClient
  ) { }

  getChart(): Observable<Array<IChart>> {
    return this.http.get<Array<IChart>>(`http://localhost:3000/chart`);
  }
}
