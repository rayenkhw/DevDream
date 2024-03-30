package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Feedback;
import tn.esprit.devdream.entities.Offre;
import tn.esprit.devdream.repositories.FeedbackRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@AllArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {
    @Autowired
    FeedbackRepository feedbackRepository;

    @Override
    public List<Feedback> retrieveAllfeedbacks() {
        log.info("Liste des Feedbacks: {}", feedbackRepository.findAll());
        return feedbackRepository.findAll();
    }

    @Override
    public Feedback retrieveFeedback(Long id_feedback) {
        return feedbackRepository.findById(id_feedback).get();
    }

    @Override
    public Feedback addFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public Map<String, Long> getStatisticsfeedback() {
        Map<String, Long> statistics = new HashMap<>();
        statistics.put("nombreTotalFeedback",feedbackRepository.count());
        // Autres statistiques à collecter
        return statistics;
    }
}
