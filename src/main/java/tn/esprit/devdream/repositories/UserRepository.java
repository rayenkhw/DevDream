package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.devdream.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT u.id, " +
            "(SELECT COUNT(cp.id_com) FROM CommentairePost cp WHERE cp.user.id = u.id) AS comment_count, " +
            "(SELECT COUNT(i.id_interaction) FROM Interaction i WHERE i.user.id = u.id) AS interaction_count " +
            "FROM User u " +
            "GROUP BY u.id " +
            "ORDER BY comment_count DESC, interaction_count DESC " +
            "LIMIT 1", nativeQuery = true)
    Object findUserWithMostCommentsAndInteractions();

}
