import { Commentaire } from './commentaire';
import { Etiquette } from './etiquette';
import { User } from './user';


export class Tache {
    id_tache?: number;
    priorite: number;
    description: string;
    status: Tache_status;
    delai: string;
    performance: string;
    remarque: string;
    commentaireList?: Commentaire[];
    etiquetteList?: Etiquette[];
    encadrant?: User;
    etudiant?: User;
}
export enum Tache_status {
    Todo = 'Todo',
    InProgress = 'InProgress',
    Done = 'Done'
  }
