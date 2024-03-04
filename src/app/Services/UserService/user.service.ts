import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { Observable } from 'rxjs';
import { Tache } from 'app/Models/tache';
import { Niveau, Role, Specialte, User } from 'app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;


  constructor(private httpClient: HttpClient) {
    this.userUrl=environment.baseUrl+"user/"
   }
   
   
   getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl+"retrieve-all-Users");
  }
  public saveUser( user: User) {
    return this.httpClient.post<Tache>(this.userUrl+"adduser", user);
  }
  
 
  updateUser(id: number, value: any): Observable<User> {
    return this.httpClient.put<User>(`${this.userUrl}modify-user/${id}`, value);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.userUrl}retrieve-User/${id}`);
  }
   
  
  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.userUrl}remove-user/${id}`);
  }
  currentUser: User = {
    id: 1,
    identifiant: '2589631',
    nom: 'wajih',
    prenom: 'wajih',
    cin: "58254478",
    email: "wajih@gmail.com",
    mdp: "wajihwa",
    niveau: Niveau.Deuxiemme , // Assurez-vous que le niveau est une chaîne de caractères
    specialite: Specialte.GC, // Assurez-vous que la spécialité est une chaîne de caractères
    rolee: Role.Etudiant, // Assurez-vous que le rôle est une chaîne de caractères
    disponibilite: true, // Par exemple, définissez la disponibilité comme true ou false
    image: 'wwwwwwwww', // Assurez-vous que le chemin de l'image est correct
    chargeTravail: 'dispo' // Assurez-vous que la charge de travail est une chaîne de caractères
  };

  loginUser(user: User) {
    this.currentUser = user; // Initialiser currentUser lors de la connexion de l'utilisateur
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
}


  




  



