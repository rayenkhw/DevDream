package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tn.esprit.devdream.entities.Feedback;
import tn.esprit.devdream.entities.Offre;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.FeedbackRepository;
import tn.esprit.devdream.repositories.UserRepository;
import tn.esprit.devdream.services.FeedbackService;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/feedback")
@CrossOrigin("*")
public class FeedbackController {
    @Autowired
    private FeedbackRepository feedbackRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FeedbackService feedbackService;
    @PostMapping("/add-feedback")
    public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback ){
        Feedback newFeedback = feedbackService.addFeedback(feedback);
        return new ResponseEntity<>(newFeedback, HttpStatus.CREATED);
        }

    @GetMapping("/retrieve-all-feedback")
    public List<Feedback> getFedbacks() {
        List<Feedback> listFeedbacks = feedbackService.retrieveAllfeedbacks();
        return listFeedbacks;
    }

    @GetMapping("/retrieve-feedback/{feedback-id}")
    public Feedback retrieveFeedback(@PathVariable("feedback-id") Long id_feedback) {
        Feedback feedback = feedbackService.retrieveFeedback(id_feedback);
        return feedback;
    }
    @GetMapping("/statsfeedback")
    public ResponseEntity<Map<String, Long>> getStatisticsfeedback() {
        Map<String, Long> statistics =feedbackService.getStatisticsfeedback();
        return ResponseEntity.ok(statistics);
    }
    }

