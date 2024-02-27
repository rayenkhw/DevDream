export interface Post {
  id_Post?: number; // Rendre id_Post optionnel
  titre: string;
  contenu: string;
  commentaires?: CommentairePost[]; // Un post peut avoir plusieurs commentaires
}

export interface CommentairePost {
  id_com?: number; 
  id_Post: number;// Clé étrangère pour identifier le post auquel le commentaire appartient
  contenu: string;
}