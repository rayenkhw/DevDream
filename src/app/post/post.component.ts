import { Component, OnInit } from '@angular/core';
import { Post } from 'app/models/forum.model';
import { Interaction } from 'app/models/forum.model';
import { ForumService } from 'app/service/forum.service';
import { Input} from '@angular/core';
import { CommentairePost } from 'app/models/forum.model';;
import { forkJoin, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

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
updateBadge(id_Post: number): void {
  this.forumService.updatePostBadge(id_Post).subscribe(
    () => {
      console.log('Badge updated successfully');
      // Mettre à jour l'interface utilisateur ou faire d'autres actions si nécessaire
    },
    error => {
      console.error('Error updating badge:', error);
      // Gérer l'erreur comme nécessaire
    }
  );
}

loadPostsWithCommentaires() {
  this.forumService.getPosts().pipe(
    switchMap(posts => {
      // Initialisation des posts avec des tableaux de commentaires vides
      this.posts = posts.map(post => ({ ...post, commentaires: [], likeCount: 0, dislikeCount: 0, loveCount: 0 }));

      // Création d'un tableau pour contenir toutes les opérations asynchrones
      const allOperations = [];

      // Pour chaque post, préparer les opérations de chargement des commentaires et des compteurs d'interactions
      this.posts.forEach(post => {
        const commentairesOperation = this.forumService.getCommentairesByPostId(post.id_Post).pipe(
          catchError(error => {
            console.error('Error loading commentaires', error);
            return of([]); // En cas d'erreur, retourner un tableau vide pour les commentaires
          })
        );

        const interactionCountersOperation = forkJoin({
          likes: this.forumService.getLikesCount(post.id_Post),
          dislikes: this.forumService.getDislikesCount(post.id_Post),
          loves: this.forumService.getLovesCount(post.id_Post)
        }).pipe(
          catchError(error => {
            console.error('Error loading interaction counters', error);
            return of({ likes: 0, dislikes: 0, loves: 0 }); // En cas d'erreur, retourner des compteurs à 0
          })
        );

        // Combinaison des opérations de chargement des commentaires et des compteurs d'interactions pour le post courant
        const combinedOperation = forkJoin({ commentaires: commentairesOperation, counters: interactionCountersOperation }).pipe(
          map(({ commentaires, counters }) => {
            post.commentaires = commentaires;
            post.likeCount = counters.likes;
            post.dislikeCount = counters.dislikes;
            post.loveCount = counters.loves;
          })
        );

        allOperations.push(combinedOperation);
      });

      // Attente de la complétion de toutes les opérations
      return forkJoin(allOperations);
    })
  ).subscribe({
    next: () => console.log('Tous les posts et leurs données associées ont été chargés'),
    error: error => console.error('Une erreur est survenue lors du chargement des posts', error)
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

  this.forumService.addCommentairePost(id_Post, nouveauCommentaire).subscribe({
    next: (commentaireAjoute) => {
      const post = this.posts.find(p => p.id_Post === id_Post); 
      if (post) {
        if (!post.commentaires) {
          post.commentaires = [];
        }
        post.commentaires.push(commentaireAjoute);
      }
      this.newCommentContent[id_Post] = ''; 
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
 interactionStates: {[id_Post: number]: {isLikeSelected: boolean, isDislikeSelected: boolean, isLoveSelected: boolean}} = {};

 // Initialisation des états par post si nécessaire
 initializeInteractionState(id_Post: number) {
   if (!this.interactionStates[id_Post]) {
     this.interactionStates[id_Post] = { isLikeSelected: false, isDislikeSelected: false, isLoveSelected: false };
   }
 }
 
 onToggleInteraction(id_Post: number, interactionType: 'Like' | 'Dislike' | 'Love') {
   this.initializeInteractionState(id_Post); // S'assurer que l'état pour ce post est initialisé
   let isCurrentlySelected: boolean;
 
   switch (interactionType) {
     case 'Like':
       isCurrentlySelected = this.interactionStates[id_Post].isLikeSelected;
       this.forumService.toggleLike(id_Post, this.Id).subscribe(() => {
         this.interactionMessage[id_Post] = isCurrentlySelected ? "Like supprimé" : "Like ajouté";
         this.interactionStates[id_Post].isLikeSelected = !isCurrentlySelected; // Inverse l'état de sélection spécifique à ce post
         this.updateInteractionCounters(id_Post);
       });
       break;
     case 'Dislike':
       isCurrentlySelected = this.interactionStates[id_Post].isDislikeSelected;
       this.forumService.toggleDislike(id_Post, this.Id).subscribe(() => {
         this.interactionMessage[id_Post] = isCurrentlySelected ? "Dislike supprimé" : "Dislike ajouté";
         this.interactionStates[id_Post].isDislikeSelected = !isCurrentlySelected; // Inverse l'état de sélection spécifique à ce post
         this.updateInteractionCounters(id_Post);
       });
       break;
     case 'Love':
       isCurrentlySelected = this.interactionStates[id_Post].isLoveSelected;
       this.forumService.toggleLove(id_Post, this.Id).subscribe(() => {
         this.interactionMessage[id_Post] = isCurrentlySelected ? "Coup de cœur supprimé" : "Coup de cœur ajouté";
         this.interactionStates[id_Post].isLoveSelected = !isCurrentlySelected; // Inverse l'état de sélection spécifique à ce post
         this.updateInteractionCounters(id_Post);
       });
       break;
     default:
       console.error('Invalid interaction type');
   }
 }
 


updateInteractionCounters(id_Post: number) {
  const likes$ = this.forumService.getLikesCount(id_Post);
  const dislikes$ = this.forumService.getDislikesCount(id_Post);
  const loves$ = this.forumService.getLovesCount(id_Post);

  forkJoin([likes$, dislikes$, loves$]).pipe(
    map(([likesCount, dislikesCount, lovesCount]) => ({
      likesCount,
      dislikesCount,
      lovesCount
    }))
  ).subscribe(({ likesCount, dislikesCount, lovesCount }) => {
    const post = this.posts.find(p => p.id_Post === id_Post);
    if (post) {
      post.likeCount = likesCount;
      post.dislikeCount = dislikesCount;
      post.loveCount = lovesCount;
    }
  });
}



}





