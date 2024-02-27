package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devdream.entities.Evaluation;

public interface EvaluationRepository extends JpaRepository<Evaluation, Long> {
}
