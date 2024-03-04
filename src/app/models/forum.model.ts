export interface Post {
  id_Post?: number; // Rendre id_Post optionnel
  titre: string;
  contenu: string;
  commentaires?: CommentairePost[]; 
  likeCount?: number; // Optionnel pour gérer les cas où ces propriétés ne sont pas fournies
  dislikeCount?: number;
  loveCount?: number;
}


export interface CommentairePost {
  id_com?: number; 
  id_Post: number;// Clé étrangère pour identifier le post auquel le commentaire appartient
  contenu: string;
}

export interface Interaction {
  id_interaction?: number; 
  id_Post: number;
  id: number;
  type_interaction: string;
}