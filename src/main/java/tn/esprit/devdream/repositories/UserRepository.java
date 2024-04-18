
package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

        @Query("SELECT a FROM User a WHERE a.idUser = :idUser")
        User findUserByIdUser(@Param("idUser") Long idUser);




}
