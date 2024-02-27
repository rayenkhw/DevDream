package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Evaluation;

import java.util.List;

public interface IEvaluationServiceImpl {
    Evaluation addEvaluation(Evaluation evaluation);

    List<Evaluation> retrieveEvaluations();

    Evaluation retrieveEvaluation(Long id_evaluation);


    Evaluation updateEvaluation(Evaluation evaluation);

    void removeEvaluation(Long idEvaluation);
}
