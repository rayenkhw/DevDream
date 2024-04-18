package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Reclamation;
@Repository
public interface IReclamationRepository extends JpaRepository<Reclamation,Long> {
    @Query("SELECT a FROM Reclamation a WHERE a.id_Reclamation = :id")
    Reclamation findReclamationById_Reclamation(@Param("id") Long id);
}
