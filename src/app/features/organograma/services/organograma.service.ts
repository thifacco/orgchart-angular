import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IChart } from '../interfaces/chart';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrganogramaService {

  constructor(
    private http: HttpClient
  ) { }

  getChart(): Observable<Array<IChart>> {
    return this.http.get<Array<IChart>>(`${environment.api}/chart`).pipe(
      tap(console.log)
    );
  }
}
