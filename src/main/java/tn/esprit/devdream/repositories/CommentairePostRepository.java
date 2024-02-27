package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.devdream.entities.CommentairePost;

import java.util.List;

public interface CommentairePostRepository extends JpaRepository<CommentairePost, Long> {
    @Query("SELECT c FROM CommentairePost c WHERE c.post.id_Post = :id_Post")
    List<CommentairePost> findByPostId(@Param("id_Post") Long id_Post);
}
