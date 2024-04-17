import { Tache } from './tache';
import { Role } from './user';
export class Commentaire {
    id_comment: number;
    contenu: string;
    tache: Tache;
    //auteur?: Role;
    dateCreation?:Date;
}
