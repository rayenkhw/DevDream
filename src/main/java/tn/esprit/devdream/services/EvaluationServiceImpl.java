package tn.esprit.devdream.services;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import tn.esprit.devdream.entities.Evaluation;
import tn.esprit.devdream.repositories.EvaluationRepository;
import tn.esprit.devdream.repositories.StageRepository;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class EvaluationServiceImpl implements IEvaluationServiceImpl  {
    EvaluationRepository evaluationRepository ;
    StageRepository stageRepository;
    @Override
    public Evaluation addEvaluation(Evaluation evaluation) {
        return evaluationRepository.save(evaluation);
    }

    @Override
    public List<Evaluation> retrieveEvaluations() {

        return evaluationRepository.findAll();
    }

    @Override
    public Evaluation retrieveEvaluation(Long id_evaluation) {
        return evaluationRepository.findById(id_evaluation).orElse(null);
    }

    @Override
    public Evaluation updateEvaluation(Evaluation evaluation) {
        return evaluationRepository.save(evaluation);
    }


    @Override
    public void removeEvaluation(Long id_evaluation) {
        evaluationRepository.deleteById(id_evaluation);

    }

    @Transactional
    @Override
    public Evaluation addEvaluationToStage(Evaluation evaluation, Long id_stage) {
        return stageRepository.findById(id_stage).map(stage -> {
            evaluation.setStage(stage);
            return evaluationRepository.save(evaluation);
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Stage not found with id: " + id_stage));
    }

}
