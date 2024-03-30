package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Offre;

import java.util.List;
import java.util.Optional;

@Repository
public interface OffreRepository extends JpaRepository<Offre, Long> {
    @Query("SELECT o FROM Offre o WHERE o.id_offre = :id")
     Offre findOffreById_offre(@Param("id") Long id_offre);

    List<Offre> findByTitreOrSkillsOrDuree(String titre, String skills, String duree);


}