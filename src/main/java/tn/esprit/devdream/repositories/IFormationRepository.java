package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Formation;

import java.util.List;

@Repository
public interface IFormationRepository extends JpaRepository<Formation,Long> {
    @Query("SELECT f FROM Formation f WHERE f.id_formation = :id")
    Formation findOffreById_formation(@Param("id") Long id_formation);
    List<Formation> findByTitreOrDescription(String titre, String descritpion);
}
