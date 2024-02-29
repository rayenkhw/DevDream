export class User {
    idUser : number  ;
      identifiant : String;
      Nom : String;
      Prenom : String;
      cin : String;
      email : String;
      password : String;
       role : Role ;
       Niveau : Niveau;
       specialite : Specialite ;
       disponibilite : Boolean;
       Image : String;
       chargeTravail : String;
       Status : boolean;
       Tel : String;


}
export enum Role {
    Admin = 'Admin',
    Esprit = 'Esprit',
    Enseignant = 'Enseignant',
    Encadrant = 'Encadrant',
    Entreprise = 'Entreprise',
    Etudiant = 'Etudiant',

    
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