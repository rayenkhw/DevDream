import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Depot } from './depot.module';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http: HttpClient) { }

  getAllDepots(): Observable<Depot[]> {
    return this.http.get<Depot[]>('http://localhost:9000/DevDream/depot/retrieve-all-depots');
  }

  updateDepot(depot: Depot): Observable<Depot> {
    return this.http.put<Depot>('http://localhost:9000/DevDream/application/modify-depot', depot);
  }

  

}
