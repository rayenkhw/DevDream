import { Component, OnInit } from '@angular/core';
import { Post } from 'app/models/forum.model';
import { Interaction } from 'app/models/forum.model';
import { ForumService } from 'app/service/forum.service';
import { Input} from '@angular/core';
import { CommentairePost } from 'app/models/forum.model';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

   newCommentContent: { [key: number]: string } = {};
    showCommentForms: { [postId: number]: boolean } = {};

  @Input() post: Post;
  posts: Post[] = [];
  newPost: Post = { titre: '', contenu: '' }; // Assurez-vous que cela correspond à votre modèle
  editPost: Post | null = null; // Ajout de la propriété editPost
  nouveauCommentaire: string = '';
  Id: number = 1;
  isLikeSelected = false;
  isDislikeSelected = false;
  isLoveSelected = false;
  interactionMessage: { [postId: number]: string } = {};
  userInput = '';

  successMessage: string | null = null;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.loadPostsWithCommentaires();
    
  }


//cruddddddddddddddd postt


loadPostsWithCommentaires() {
  this.forumService.getPosts().subscribe(posts => {
    this.posts = posts.map(post => ({ ...post, commentaires: [] })); // Initialisez commentaires comme tableau vide

    this.posts.forEach(post => {
      // Chargement des commentaires
      this.forumService.getCommentairesByPostId(post.id_Post).subscribe(commentaires => {
        post.commentaires = commentaires;
      });

      // Chargement des compteurs d'interactions
      const likes$ = this.forumService.getLikesCount(post.id_Post);
      const dislikes$ = this.forumService.getDislikesCount(post.id_Post);
      const loves$ = this.forumService.getLovesCount(post.id_Post);

      forkJoin([likes$, dislikes$, loves$]).pipe(
        map(([likesCount, dislikesCount, lovesCount]) => ({
          likesCount,
          dislikesCount,
          lovesCount
        }))
      ).subscribe(({ likesCount, dislikesCount, lovesCount }) => {
        post.likeCount = likesCount;
        post.dislikeCount = dislikesCount;
        post.loveCount = lovesCount;
      });
    });
  });
}



addPost() {
  this.newPost.contenu = this.forumService.filterText(this.newPost.contenu);
  this.forumService.addPost(this.newPost).subscribe({
    next: (post) => {
      this.posts.push(post); // Ajoute le nouveau post à la liste des posts
      this.newPost = { titre: '', contenu: '' }; // Réinitialise le formulaire pour un nouveau post
    },
    error: (error) => console.error("Erreur lors de l'ajout du post", error)
  });
}


editPostInit(post: Post) {
  this.editPost = { ...post }; // Clone le post pour la modification
}
cancelEdit() {
  this.editPost = null; // Annule la modification en cours
}

confirmEdit() {
  if (this.editPost) {
    this.forumService.updatePost(this.editPost).subscribe({
      next: (updatedPost) => {
        // Met à jour le post dans la liste des posts
        const index = this.posts.findIndex(p => p.id_Post === this.editPost!.id_Post);
        if (index !== -1) {
          this.posts[index] = updatedPost; // Assurez-vous que votre backend renvoie le post mis à jour
        }
        this.editPost = null; // Réinitialise l'objet pour sortir du mode édition
      },
      error: (error) => console.error("Erreur lors de la mise à jour du post", error)
    });
  }
}

deletePost(postId: number) {
  this.forumService.deletePost(postId).subscribe({
    next: () => {
      this.posts = this.posts.filter(post => post.id_Post !== postId); // Supprime le post de la liste
      this.successMessage = "Le post a été supprimé avec succès."; // Définit le message de succès
      setTimeout(() => this.successMessage = null, 3000); // Efface le message après 3 secondes
    },
    error: (error) => {
      console.error("Erreur lors de la suppression du post", error);
      this.successMessage = null; // Assurez-vous de réinitialiser le message en cas d'erreur
    }
  });
}



//cruddddddddddddd commentaireeeeeeeeeeee
addCommentairePost(id_Post: number, commentaireContent: string) {
  if (!commentaireContent) {
    console.error("Le commentaire ne peut pas être vide");
    return;
  }

  // Filtrage du contenu du commentaire pour éliminer les mots interdits
  const filteredContent = this.forumService.filterText(commentaireContent);

  const nouveauCommentaire = {
    contenu: filteredContent, // Utilisez le contenu filtré ici
  };

  // Utiliser l'ID du post dans l'URL
  this.forumService.addCommentairePost(id_Post, nouveauCommentaire).subscribe({
    next: (commentaireAjoute) => {
      const post = this.posts.find(p => p.id_Post === id_Post); // Assurez-vous que l'ID du post est correctement référencé ici
      if (post) {
        if (!post.commentaires) {
          post.commentaires = [];
        }
        post.commentaires.push(commentaireAjoute);
      }
      this.newCommentContent[id_Post] = ''; // Réinitialiser le champ de saisie du commentaire
    },
    error: (error) => console.error("Erreur lors de l'ajout du commentaire", error)
  });
}



deleteCommentairePost(commentaireId: number) {
  this.forumService.deleteCommentairePost(commentaireId).subscribe({
      next: () => {
          // Logique pour gérer la suppression réussie
      },
      error: (error) => console.error("Erreur lors de la suppression du commentaire", error)
  });
}

 //////////////////interactions
 onToggleInteraction(id_Post: number, interactionType: 'Like' | 'Dislike' | 'Love') {
  switch (interactionType) {
    case 'Like':
      this.forumService.toggleLike(id_Post, this.Id).subscribe(() => {
        this.interactionMessage[id_Post] = "Like ajouté";
      });
      break;
    case 'Dislike':
      this.forumService.toggleDislike(id_Post, this.Id).subscribe(() => {
        this.interactionMessage[id_Post] = "Dislike ajouté";
      });
      break;
    case 'Love':
      this.forumService.toggleLove(id_Post, this.Id).subscribe(() => {
        this.interactionMessage[id_Post] = "Coup de cœur ajouté";
      });
      break;
    default:
      console.error('Invalid interaction type');
  }
}

}





