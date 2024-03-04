import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { Etiquette } from 'app/Models/etiquette';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtiquetteService {

  private etiquetteUrl: string;

  constructor(private httpClient: HttpClient) {
    this.etiquetteUrl=environment.baseUrl+"etiquette/"
   }

   getAllEtiquettes(): Observable<Etiquette[]> {
    return this.httpClient.get<Etiquette[]>(this.etiquetteUrl+"retrieve-all-etiquettes");
  }

  public saveEtiquette( etiquette: Etiquette) {
    return this.httpClient.post<Etiquette>(this.etiquetteUrl+"addetiquette", etiquette);
  }
  updateEtiquette(id: number, value: any): Observable<Etiquette> {
    return this.httpClient.put<Etiquette>(`${this.etiquetteUrl}modify-etiquette/${id}`, value);
  }
  getEtiquetteById(id: number): Observable<Etiquette> {
    return this.httpClient.get<Etiquette>(`${this.etiquetteUrl}retrieve-etiquette/${id}`);
  }
  deleteEtiquette(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.etiquetteUrl}remove-etiquette/${id}`);
  }
}
