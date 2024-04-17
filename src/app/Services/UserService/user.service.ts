import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Niveau, Role, Specialite, User } from 'app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;


  constructor(private httpClient: HttpClient) {
    this.userUrl=environment.baseUrl+"user/"
   }
   
   /*addUser(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/api/v1/users/', data);
  }*/

  
  addUser(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:9000/DevDream/api/v1/auth/register', data);
  }
   getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:9000/DevDream/api/v1/user/showAlluser').pipe(
      map(users => users.map(user => ({
        ...user,
        role: Role[user.role], // Transforme la chaîne en énumération Role, si applicable
        niveau: Niveau[user.niveau], // Transforme la chaîne en énumération Niveau, si applicable
        specialite: Specialite[user.specialite], // Transforme la chaîne en énumération Specialite, si applicable
        // Ajoutez d'autres transformations si nécessaire
      })))
    );

  }
  
 /*
  updateUser(id: number, data: any): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/api/v1/users/${id}`, data);
  }*/
  updateUser(id: number, data: any): Observable<any> {
    return this.httpClient.put(`http://localhost:9000/api/v1/user/updateUser/${id}`, data);
    
  }
  /*deleteUser(id: number): Observable<any> {
    return this.httpClient.post(`http://localhost:9000/DevDream/api/v1/user/removeUser/${id}`, {});
  }*/
  deleteUser(id: number): Observable<any> {
    return this.httpClient.post(`http://localhost:8081/api/v1/user/removeUser/${id}`, {});
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.userUrl}retrieve-User/${id}`);
  }

  getUserArchives(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:9000/DevDream/api/v1/user/UsersArchives').pipe(
      map(users => users.map(user => ({
        ...user,
        role: Role[user.role], // Transforme la chaîne en énumération Role, si applicable
        niveau: Niveau[user.niveau], // Transforme la chaîne en énumération Niveau, si applicable
        specialite: Specialite[user.specialite], // Transforme la chaîne en énumération Specialite, si applicable
        // Ajoutez d'autres transformations si nécessaire
      })))
    );

  }
  deleteUserArchives(id: number): Observable<any> {
    return this.httpClient.post(`http://localhost:9000/DevDream/api/v1/user/removeUserArchives/${id}`, {});
  }
  getUserRoleStatistics(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:9000/DevDream/api/v1/user/roles`);
  }
  
  getUserBanned(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:9000/api/v1/user/Usersbanne').pipe(
      map(users => users.map(user => ({
        ...user,
        role: Role[user.role], // Transforme la chaîne en énumération Role, si applicable
        niveau: Niveau[user.niveau], // Transforme la chaîne en énumération Niveau, si applicable
        specialite: Specialite[user.specialite], // Transforme la chaîne en énumération Specialite, si applicable
        
      })))
    );

  }
  deleteUserBanne(id: number): Observable<any> {
    return this.httpClient.post(`http://localhost:9000/api/v1/user/removeUserbanne/${id}`, {});
  }
}


  




  



