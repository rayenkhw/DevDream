import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { Observable } from 'rxjs';
import { Stage } from 'app/Models/stage';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  private stageUrl: string;

  constructor(private httpClient: HttpClient) {
    this.stageUrl=environment.baseUrl+"stage/"
   }
   getAllStages(): Observable<Stage[]> {
    return this.httpClient.get<Stage[]>(this.stageUrl+"retrieve-all-Stages");
  }
  public saveStage( stage: Stage) {
    return this.httpClient.post<Stage>(this.stageUrl+"addstage", stage);
  }
  updateStage(id: number, value: any): Observable<Stage> {
    return this.httpClient.put<Stage>(`${this.stageUrl}modify-stage/${id}`, value);
  }
  getStageById(id: number): Observable<Stage> {
    return this.httpClient.get<Stage>(`${this.stageUrl}retrieve-stage/${id}`);
  }
  deleteStage(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.stageUrl}remove-stage/${id}`);
  }
  
}


