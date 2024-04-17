export interface Post {
  id_Post?: number;
  titre: string;
  contenu: string;
  commentaires?: CommentairePost[]; 
  likeCount?: number;
  dislikeCount?: number;
  loveCount?: number;
  badge?: string;

}


export interface CommentairePost {
  id_com?: number; 
  id_Post: number;
  contenu: string;
}

export interface Interaction {
  id_interaction?: number; 
  id_Post: number;
  id: number;
  type_interaction: string;
}