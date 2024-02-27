import { Component, OnInit } from '@angular/core';
import { Post } from 'app/models/forum.model';
import { ForumService } from 'app/service/forum.service';
import { Input} from '@angular/core';
import { CommentairePost } from 'app/models/forum.model';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  showCommentForm: boolean = false;
   newCommentContent: { [key: number]: string } = {};
    showCommentForms: { [postId: number]: boolean } = {};

  @Input() post: Post;
  posts: Post[] = [];
  newPost: Post = { titre: '', contenu: '' }; // Assurez-vous que cela correspond à votre modèle
  editPost: Post | null = null; // Ajout de la propriété editPost
  nouveauCommentaire: string = '';

  successMessage: string | null = null;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.loadPosts();
    
  }


//cruddddddddddddddd postt

loadPosts() {
  this.forumService.getPosts().subscribe({
    next: (posts) => {
      this.posts = posts;
      // Pour chaque post, chargez son commentaire
      this.posts.forEach(post => {
        this.forumService.getCommentairePostById(post.id_Post).subscribe({
          next: (commentaire) => {
            post.commentaires = [commentaire]; // Mettez le commentaire dans un tableau
          },
          error: (error) => console.error("Erreur lors du chargement des commentaires", error)
        });
      });
    },
    error: (error) => console.error("Erreur lors du chargement des posts", error)
  });
}


addPost() {
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
addCommentairePost(postId: number, commentaireContent: string) {
  if (!commentaireContent) {
    // Optionnel: afficher un message d'erreur ou une validation si le commentaire est vide
    console.error("Le commentaire ne peut pas être vide");
    return;
  }

  const nouveauCommentaire: CommentairePost = {
    contenu: commentaireContent,
    id_Post: postId, // Assurez-vous que cela correspond au nom de la propriété dans votre modèle
  };

  this.forumService.addCommentairePost(nouveauCommentaire).subscribe({
    next: (commentaireAjoute) => {
      // Trouvez le post concerné et ajoutez le commentaire à sa liste de commentaires
      const post = this.posts.find(p => p.id_Post === postId);
      if (post) {
        if (!post.commentaires) {
          post.commentaires = [];
        }
        post.commentaires.push(commentaireAjoute);
      }
      this.newCommentContent[postId] = ''; // Réinitialise le champ de saisie du commentaire
      this.showCommentForms[postId] = false; // Ferme le formulaire de commentaire
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

 

}
