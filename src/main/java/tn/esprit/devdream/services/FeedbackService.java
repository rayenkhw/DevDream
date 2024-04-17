package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Feedback;

import java.util.List;
import java.util.Map;

public interface FeedbackService {
    List<Feedback> retrieveAllfeedbacks();

    Feedback retrieveFeedback(Long id_feedback);

    Feedback addFeedback(Feedback feedback);

    Map<String, Long> getStatisticsfeedback();

    Feedback updateFeedbackRating(Long idFeedback, int rating);
}
