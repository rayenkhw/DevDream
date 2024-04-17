import { Component, OnInit } from '@angular/core';
import { Post } from 'app/Models/forum.model';
import { Interaction } from 'app/Models/forum.model';
import { ForumService } from 'app/service/forum.service';
import { Input} from '@angular/core';
import { CommentairePost } from 'app/Models/forum.model';;
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
  newPost: Post = { titre: '', contenu: '' }; 
  editPost: Post | null = null; 
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
  this.forumService.getPosts().pipe(
    switchMap(posts => {
   
      this.posts = posts.map(post => ({ ...post, commentaires: [], likeCount: 0, dislikeCount: 0, loveCount: 0 }));
      const allOperations = [];
      this.posts.forEach(post => {
        const commentairesOperation = this.forumService.getCommentairesByPostId(post.id_Post).pipe(
          catchError(error => {
            console.error('Error loading commentaires', error);
            return of([]); 
          })
        );

        const interactionCountersOperation = forkJoin({
          likes: this.forumService.getLikesCount(post.id_Post),
          dislikes: this.forumService.getDislikesCount(post.id_Post),
          loves: this.forumService.getLovesCount(post.id_Post)
        }).pipe(
          catchError(error => {
            console.error('Error loading interaction counters', error);
            return of({ likes: 0, dislikes: 0, loves: 0 }); 
          })
        );

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
      this.posts.push(post); 
      this.newPost = { titre: '', contenu: '' };
    },
    error: (error) => console.error("Erreur lors de l'ajout du post", error)
  });
}


editPostInit(post: Post) {
  this.editPost = { ...post }; 
}
cancelEdit() {
  this.editPost = null; 
}

confirmEdit() {
  if (this.editPost) {
    this.forumService.updatePost(this.editPost).subscribe({
      next: (updatedPost) => {
       
        const index = this.posts.findIndex(p => p.id_Post === this.editPost!.id_Post);
        if (index !== -1) {
          this.posts[index] = updatedPost; 
        }
        this.editPost = null; 
      },
      error: (error) => console.error("Erreur lors de la mise à jour du post", error)
    });
  }
}

deletePost(postId: number) {
  this.forumService.deletePost(postId).subscribe({
    next: () => {
      this.posts = this.posts.filter(post => post.id_Post !== postId); 
      this.successMessage = "Le post a été supprimé avec succès."; 
      setTimeout(() => this.successMessage = null, 3000); 
    },
    error: (error) => {
      console.error("Erreur lors de la suppression du post", error);
      this.successMessage = null; 
    }
  });
}

//cruddddddddddddd commentaireeeeeeeeeeee
addCommentairePost(id_Post: number, commentaireContent: string) {
  if (!commentaireContent) {
    console.error("Le commentaire ne peut pas être vide");
    return;
  }

  const filteredContent = this.forumService.filterText(commentaireContent);

  const nouveauCommentaire = {
    contenu: filteredContent, 
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
       
      },
      error: (error) => console.error("Erreur lors de la suppression du commentaire", error)
  });
}

 //////////////////interactions
 interactionStates: {[id_Post: number]: {isLikeSelected: boolean, isDislikeSelected: boolean, isLoveSelected: boolean}} = {};

 initializeInteractionState(id_Post: number) {
   if (!this.interactionStates[id_Post]) {
     this.interactionStates[id_Post] = { isLikeSelected: false, isDislikeSelected: false, isLoveSelected: false };
   }
 }
 
 onToggleInteraction(id_Post: number, interactionType: 'Like' | 'Dislike' | 'Love') {
  this.initializeInteractionState(id_Post);
  let isCurrentlySelected: boolean;

  const post = this.posts.find(p => p.id_Post === id_Post); 
  if (!post) return; 

  switch (interactionType) {
    case 'Like':
      isCurrentlySelected = this.interactionStates[id_Post].isLikeSelected;
      this.forumService.toggleLike(id_Post, this.Id).subscribe(() => {
        this.interactionMessage[id_Post] = isCurrentlySelected ? "Like supprimé" : "Like ajouté";
        this.interactionStates[id_Post].isLikeSelected = !isCurrentlySelected;
        post.likeCount += isCurrentlySelected ? -1 : 1; 
      });
      break;
    case 'Dislike':
      isCurrentlySelected = this.interactionStates[id_Post].isDislikeSelected;
      this.forumService.toggleDislike(id_Post, this.Id).subscribe(() => {
        this.interactionMessage[id_Post] = isCurrentlySelected ? "Dislike supprimé" : "Dislike ajouté";
        this.interactionStates[id_Post].isDislikeSelected = !isCurrentlySelected;
        post.dislikeCount += isCurrentlySelected ? -1 : 1;
      });
      break;
    case 'Love':
      isCurrentlySelected = this.interactionStates[id_Post].isLoveSelected;
      this.forumService.toggleLove(id_Post, this.Id).subscribe(() => {
        this.interactionMessage[id_Post] = isCurrentlySelected ? "Coup de cœur supprimé" : "Coup de cœur ajouté";
        this.interactionStates[id_Post].isLoveSelected = !isCurrentlySelected;
        post.loveCount += isCurrentlySelected ? -1 : 1; // Mettre à jour le compteur de loves localement
      });
      break;
    default:
      console.error('Invalid interaction type');
  }

  // Mettre à jour le badge du post en fonction des nouveaux compteurs
  this.updateBadge(post);
}

updateBadge(post: Post): void {
  if (post.likeCount >= 10) {
    post.badge = "Actif";
  } else if (post.likeCount >= 5 && post.dislikeCount >= 5) {
    post.badge = "Controversé";
  } else if (post.loveCount >= 5) {
    post.badge = "Aimé";
  } else {
    post.badge = ""; 
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





