package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Questionnaire;


import java.util.List;

public interface IQuestionnaireService {
    public Questionnaire addQuestionnaire(Questionnaire q);
    public Questionnaire modifyQuestionnaire(Questionnaire questionnaire);
    public List<Questionnaire> retrieveAllQuestionnaire();

    public Questionnaire retrieveQuestionnaire(Long idQuestionnaire);
    public void removeQuestionnaire(Long idQuestionnaire);
}
