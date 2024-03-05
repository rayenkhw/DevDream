package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Questionnaire;

@Repository
public interface IQuestionnaireRepository extends JpaRepository<Questionnaire,Long > {
}
