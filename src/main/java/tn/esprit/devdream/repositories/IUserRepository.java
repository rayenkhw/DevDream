package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.User;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

    User findUserByIdentifiant(String identifiant);
}
