package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Stage;

@Repository
public interface StageRepository extends JpaRepository<Stage, Long> {
}