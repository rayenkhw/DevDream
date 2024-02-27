package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Evaluation;
import tn.esprit.devdream.repositories.EvaluationRepository;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class EvaluationServiceImpl implements IEvaluationServiceImpl  {
    EvaluationRepository evaluationRepository ;
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



}
