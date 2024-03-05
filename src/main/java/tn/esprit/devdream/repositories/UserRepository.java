package tn.esprit.devdream.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devdream.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

        Optional<User> findByEmail(String email);
        List<User> findByDisponibilite(int disponibilite);
}
