package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Evaluation;
import tn.esprit.devdream.services.IEvaluationServiceImpl;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/evaluation")
@CrossOrigin(origins ="http://localhost:4200")
public class EvaluationController {

    IEvaluationServiceImpl evaluationService;


    @GetMapping("/evaluation/{id_evaluation}")
    Evaluation getEvaluation(@PathVariable Long id_evaluation)
    {
        return evaluationService.retrieveEvaluation(id_evaluation);
    }
    @GetMapping("/allEvaluations")
    List<Evaluation> getEvaluations()
    {
        return evaluationService.retrieveEvaluations();
    }

    @DeleteMapping("/evaluation/{id_evaluation}")
    void deleteEvaluation(@PathVariable Long id_evaluation)
    {
        evaluationService.removeEvaluation(id_evaluation);
    }

    @PutMapping("/updateEvaluation")
    Evaluation updatePost(@RequestBody Evaluation evaluation) {
        return evaluationService.updateEvaluation(evaluation);
    }
    @PostMapping("/{idStage}/add")
    public ResponseEntity<Evaluation> addEvaluationToStage(@PathVariable("idStage") Long idStage, @RequestBody Evaluation evaluation) {
        Evaluation updatedEvaluation = evaluationService.addEvaluationToStage(evaluation, idStage);
        return ResponseEntity.ok(updatedEvaluation);
    }
}

