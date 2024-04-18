package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.CommentairePost;

import java.util.List;

public interface ICommentairePostServiceImpl {

    CommentairePost addCommentairePost(CommentairePost commentairePost);

    List<CommentairePost> retrieveCommentairePosts();

    CommentairePost retrieveCommentairePost(Long id_com);

    CommentairePost updateCommentairePost(CommentairePost commentairePost);

    void removeCommentairePost(Long id_com);

    List<CommentairePost> getCommentairePostByPostId(Long id_Post);

    CommentairePost affecterCommentairePost(CommentairePost commentairePost, Long idPost);
}
 