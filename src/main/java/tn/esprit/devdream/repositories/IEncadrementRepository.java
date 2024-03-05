package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Encadrement;

import java.util.List;

@Repository
public interface IEncadrementRepository extends JpaRepository<Encadrement, Long> {
    Encadrement findByEtudiantIdUser(Long etudiantId);

    List<Encadrement> findByEncadrantIdUser(Long encadrantId);
}
