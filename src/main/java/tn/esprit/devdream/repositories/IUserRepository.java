package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

    User findUserByIdentifiant(String identifiant);
    Optional<User> findByEmail(String email);

    User findUserByEmail(String email);

    List<User> findByDisponibilite(int disponibilite);

    // List<User> findByBanss(int sat);

    // List<User> findUsersByStatus(int STAT);

    @Query(value = "SELECT u.id, " +
            "(SELECT COUNT(cp.id_com) FROM CommentairePost cp WHERE cp.user.id = u.id) AS comment_count, " +
            "(SELECT COUNT(i.id_interaction) FROM Interaction i WHERE i.user.id = u.id) AS interaction_count " +
            "FROM User u " +
            "GROUP BY u.id " +
            "ORDER BY comment_count DESC, interaction_count DESC " +
            "LIMIT 1", nativeQuery = true)
    Object findUserWithMostCommentsAndInteractions();


    @Query("SELECT u.role, COUNT(u) FROM User u GROUP BY u.role")
    List<Object[]> countUsersByRole();
}
