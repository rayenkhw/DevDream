package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
}
