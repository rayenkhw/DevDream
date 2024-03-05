package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Offre;

@Repository
public interface OffreRepository extends JpaRepository<Offre, Long> {
}