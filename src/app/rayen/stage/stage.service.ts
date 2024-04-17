import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Stage } from './stage.module';

@Injectable({
  providedIn: 'root'
})
export class StageserviceService {

  constructor(private http: HttpClient) { }

  getAllStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>('http://localhost:9000/DevDream/stage/retrieve-all-Stages');
  }


}
