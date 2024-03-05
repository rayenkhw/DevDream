import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from 'app/user';
import { map } from 'rxjs/operators';
import {  Role, Niveau, Specialite } from 'app/user'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL ="http://localhost:3000/api/v1/users/";
  constructor(private _http: HttpClient) {}

  addUser(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/api/v1/users/', data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/api/v1/users/${id}`, data);
  }
  deleteUser(id: number): Observable<any> {
    return this._http.post(`http://localhost:8081/api/v1/user/removeUser/${id}`, {});
  }
  getUserList(): Observable<User[]> {
    return this._http.get<User[]>('http://localhost:8081/api/v1/user/showAlluser').pipe(
      map(users => users.map(user => ({
        ...user,
        role: Role[user.role], // Transforme la chaîne en énumération Role, si applicable
        niveau: Niveau[user.Niveau], // Transforme la chaîne en énumération Niveau, si applicable
        specialite: Specialite[user.specialite], // Transforme la chaîne en énumération Specialite, si applicable
        // Ajoutez d'autres transformations si nécessaire
      })))
    );

  }
  getUserArchives(): Observable<User[]> {
    return this._http.get<User[]>('http://localhost:8081/api/v1/user/UsersArchives').pipe(
      map(users => users.map(user => ({
        ...user,
        role: Role[user.role], // Transforme la chaîne en énumération Role, si applicable
        niveau: Niveau[user.Niveau], // Transforme la chaîne en énumération Niveau, si applicable
        specialite: Specialite[user.specialite], // Transforme la chaîne en énumération Specialite, si applicable
        // Ajoutez d'autres transformations si nécessaire
      })))
    );

  }
  deleteUserArchives(id: number): Observable<any> {
    return this._http.post(`http://localhost:8081/api/v1/user/removeUserArchives/${id}`, {});
  }
}