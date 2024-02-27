package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devdream.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
