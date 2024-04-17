package tn.esprit.devdream.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import tn.esprit.devdream.entities.Formation;
import tn.esprit.devdream.repositories.IFormationRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class FormationService implements IFormationService {
    @Autowired
    IFormationRepository formationRepository;

    @Override
    public Formation addFormation(Formation f) {
        return formationRepository.save(f);
    }

    @Override
    public void removeFormation(Long idFormation) {
        formationRepository.deleteById(idFormation);

    }

    @Override
    public Formation modifyFormation(Formation id_formation) {
        return formationRepository.save(id_formation);
    }

    @Override
    public List<Formation> retrieveAllFormations() {
        log.info("Liste des Formations: {}", formationRepository.findAll());
        return formationRepository.findAll();
    }

    @Override
    public Formation retrieveformation(Long id_formation) {
        return formationRepository.findById(id_formation).get();
    }


    @Override
    public List<Formation> searchFormations(String mot_cle) {
            return formationRepository.findByTitreOrDescription(mot_cle, mot_cle);

    }

    @Override
    public Map<String, Long> getStatisticsformation() {
        Map<String, Long> statistics = new HashMap<>();
        statistics.put("nombreTotalFormations",formationRepository.count());
        // Autres statistiques à collecter
        return statistics;
    }

    @Override
    public Formation likeFormation(long id_formation) {
        Formation formation = formationRepository.findById(id_formation)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Formation not found with id " + id_formation));
        formation.setNombreLikes(formation.getNombreLikes() + 1);
        return formationRepository.save(formation);
    }


}
