import { Tache } from './tache';
import { Stage } from './stage';
import { Encadrement } from './encadrement';
export class User {
    idUser:number;

        identifiant:string;
        nom: string;
        prenom: String;
        cin: String;
        email: String;
         mdp: String;
         niveau: Niveau;
         specialite: Specialite;
         role: Role;
         disponibilite: number;
         image: String;
         chargeTravail: String;
         taches_encadrant?: Tache[];
         taches_etudiant?: Tache[];
         encadrementsEncadrant?: Encadrement[];
         encadrementsEtudiant?: Encadrement[];
         stage?: Stage;
         stageList?: Stage[];
    
}

export enum Niveau {
    Premiere = 'Premiere',
    Deuxiemme = 'Deuxiemme',
    Troisiemme = 'Troisiemme',
    Quateriemme = 'Quateriemme',
    
  }
  export enum Specialite {
    IT = 'IT',
    TC = 'TC',
    GC = 'GC',
    GE = 'GE',
    
  }
  export interface AuthenticationRequest {
    email: string;
    password: string;
  }
  export interface AuthenticationResponse {
    jwtToken: string;
    idUser: number;
    identifiant: string;
    nom: string;
    prenom: string;
    image: string;
    email: string;
    role: Role;
    disponibilite: number;
  }


export enum Role {
    Admin = 'Admin',
    Esprit = 'Esprit',
    Enseignant = 'Enseignant',
    Encadrant = 'Encadrant',
    Entreprise = 'Entreprise',
    Etudiant = 'Etudiant',

    
  }
