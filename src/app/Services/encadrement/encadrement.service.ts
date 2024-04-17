import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/Models/user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncadrementService {
  private encadrementUrl: string;


  constructor(private httpClient: HttpClient)  {
    this.encadrementUrl=environment.baseUrl+"encadrement/"
   }

   getEtudiantsEncadres(encadrantId: number): Observable<User[]> {
    const url = `${this.encadrementUrl}etudiants-encadres/${encadrantId}`;
    return this.httpClient.get<User[]>(url);
  }
}


