import { Tache } from './tache';
import { Stage } from './stage';
import { Encadrement } from './encadrement';
export class User {
    idUser:number;

        identifiant:String;
        nom: String;
        prenom: String;
        cin: String;
        email: String;
         mdp: String;
         niveau: Niveau;
         specialite: Specialite;
         role: Role;
         disponibilite: Boolean;
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
  }


export enum Role {
    Admin = 'Admin',
    Esprit = 'Esprit',
    Enseignant = 'Enseignant',
    Encadrant = 'Encadrant',
    Entreprise = 'Entreprise',
    Etudiant = 'Etudiant',

    
  }
