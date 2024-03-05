package tn.esprit.devdream.controllers;

import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Questionnaire;
import tn.esprit.devdream.services.IQuestionnaireService;


import java.util.List;

@RestController
@RequestMapping("/questionnaire")
@CrossOrigin(origins = "*")
public class QuestionnaireRestController {
    IQuestionnaireService questionnaireService;
    @GetMapping("/retrieve-all-questionnaires")
    public List<Questionnaire> getQuestionnaires() {
        List<Questionnaire> listQuestionnaires = questionnaireService.retrieveAllQuestionnaire();
        return listQuestionnaires;
    }
    @GetMapping("/retrieve-questionnaire/{idQuestionnaire}")
    public Questionnaire retrieveQuestionnaire(@PathVariable("idQuestionnaire") Long idQuestionnaire) {
        Questionnaire questionnaire = questionnaireService.retrieveQuestionnaire(idQuestionnaire);
        return questionnaire;
    }
    @PostMapping("/add-questionnaire")
    public Questionnaire addQuestionnaire(@RequestBody Questionnaire q) {
        Questionnaire questionnaire = questionnaireService.addQuestionnaire(q);
        return questionnaire;
    }
    @DeleteMapping("/remove-questionnaire/{idQuestionnaire}")
    public  void removeQuestionnaire(@PathVariable("idQuestionnaire")Long idQuestionnaire) {
        questionnaireService.removeQuestionnaire(idQuestionnaire);
    }
    @PutMapping("/modify-reclamation")
    public Questionnaire modifyQuestionnaire(@RequestBody Questionnaire questionnaire) {
        Questionnaire modifyQuestionnaire = questionnaireService.modifyQuestionnaire(questionnaire);
        return modifyQuestionnaire;
    }

}
