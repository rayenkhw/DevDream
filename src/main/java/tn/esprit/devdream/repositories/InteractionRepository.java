package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.devdream.entities.Interaction;
import tn.esprit.devdream.entities.Post;
import tn.esprit.devdream.entities.Type_interaction;
import tn.esprit.devdream.entities.User;

import java.util.Optional;

public interface InteractionRepository extends JpaRepository<Interaction, Long> {

    @Query("SELECT i FROM Interaction i WHERE i.post = :post AND i.user = :user AND i.type_interaction = :typeInteraction")
    Optional<Interaction> findByPostAndUserAndTypeInteraction(@Param("post") Post post, @Param("user") User user, @Param("typeInteraction") Type_interaction typeInteraction);


    @Query("SELECT COUNT(i) FROM Interaction i WHERE i.post.id = :postId AND i.type_interaction = :typeInteraction")
    int countByPostIdAndTypeInteraction(@Param("postId") Long postId, @Param("typeInteraction") Type_interaction typeInteraction);


}
