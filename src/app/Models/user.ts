import { Tache } from './tache';
import { Stage } from './stage';
import { Encadrement } from './encadrement';
export class User {
     id:number;

        identifiant:String;
        nom: String;
        prenom: String;
        cin: String;
        email: String;
         mdp: String;
         niveau: Niveau;
         specialite: Specialte;
         rolee: Role;
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
    Premiere,Deuxiemme,Troisiemme,Quateriemme
}
export enum Specialte {
    IT,TC,GC,GE
}
export enum Role {
    Esprit,Enseignant,Encadrant,Entreprise,Etudiant
}
