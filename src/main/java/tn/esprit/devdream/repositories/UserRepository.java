package tn.esprit.devdream.repositories;


import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.devdream.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

        Optional<User> findByEmail(String email);
        List<User> findByDisponibilite(int disponibilite);


       // List<User> findByBanss(int sat);

       // List<User> findUsersByStatus(int STAT);

        User findUserByIdentifiant (String identifiant);

        @Query("SELECT u.role, COUNT(u) FROM User u GROUP BY u.role")
        List<Object[]> countUsersByRole();
}
