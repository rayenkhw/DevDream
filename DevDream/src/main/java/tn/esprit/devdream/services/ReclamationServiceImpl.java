package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Questionnaire;
import tn.esprit.devdream.entities.Reclamation;
import tn.esprit.devdream.entities.Reponse;
import tn.esprit.devdream.entities.Statusreclamation;
import tn.esprit.devdream.repositories.IReclamationRepository;
import tn.esprit.devdream.repositories.IReponseRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ReclamationServiceImpl implements IReclamationService {
@Autowired
    IReclamationRepository iReclamationRepository;
@Autowired
    IReponseRepository iReponseRepository;

    @Override
    public Reclamation addReclamation(Reclamation r) {
        Questionnaire questionnaire = new Questionnaire();
        questionnaire.setReclamation(r);
        questionnaire.setId_user1(r.getId_cible_reclamation());
        questionnaire.setId_user2(r.getId_reclamateur());
        r.setStatus_reclamation(Statusreclamation.Nontraite);
        return iReclamationRepository.save(r);


    }

//    @Override
//    public Reponse affectReponseReclamation(Reponse rep,Long idReclamation) {
//        Reclamation reclamation = iReclamationRepository.findReclamationById_Reclamation(idReclamation);
//        reclamation.setReponse(rep );
//        rep.setReclamation(reclamation);
//        return iReponseRepository.save(rep);
//    }


    @Override
    public Reclamation modifyReclamation(Reclamation reclamation) {
        return iReclamationRepository.save(reclamation);
    }

    @Override
    public List<Reclamation> retrieveAllReclamation() {

        return iReclamationRepository.findAll();
    }

    @Override
    public Reclamation retrieveReclamation(Long idReclamation) {
        return iReclamationRepository.findById(idReclamation).get();
    }


    @Override
    public void removeReclamation(Long idReclamation) {
        iReclamationRepository.deleteById(idReclamation);

    }

    @Override
    public Reponse reclamationtraite(Long id) {
        Reclamation r = iReclamationRepository.findReclamationById_Reclamation(id);
        r.setStatus_reclamation(Statusreclamation.Traite);
        Reponse reponse = new Reponse();
        reponse.setReclamation(r);
        iReclamationRepository.save(r);
        return iReponseRepository.save(reponse);

    }

}
