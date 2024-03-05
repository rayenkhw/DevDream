package tn.esprit.devdream.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Formation;
import tn.esprit.devdream.repositories.IFormationRepository;

import java.util.List;
import java.util.Optional;

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
    public Formation addJadoreToFormation(long id_formation) {
        Optional<Formation> optionalFormation = formationRepository.findById(id_formation);

        if (optionalFormation.isPresent()) {
            Formation formation = optionalFormation.get();
            formation.setNombreJadore(formation.getNombreJadore() + 1);
            return formationRepository.save(formation);
        } else {
            // Si la formation n'est pas trouvée, vous pouvez choisir de logguer un message d'erreur
            log.error("Formation non trouvée pour l'ID : {}", id_formation);
            // Ou vous pouvez choisir de lancer une nouvelle exception ou de retourner null
            // throw new NotFoundException("Formation non trouvée pour l'ID : " + id_formation);
            return null;
        }
    }

    @Override
    public List<Formation> searchFormations(String mot_cle) {
            return formationRepository.findByTitreOrDescription(mot_cle, mot_cle);

    }


}
