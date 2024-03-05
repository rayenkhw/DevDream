package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Competance;

@Repository
public interface ICompetanceRepository extends JpaRepository<Competance,Long> {
}
