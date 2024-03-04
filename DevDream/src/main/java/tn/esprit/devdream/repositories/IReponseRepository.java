package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devdream.entities.Reponse;

public interface IReponseRepository extends JpaRepository<Reponse,Long> {
}
