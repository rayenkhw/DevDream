package tn.esprit.devdream.services;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.*;
import tn.esprit.devdream.repositories.ApplicationRepository;
import tn.esprit.devdream.repositories.DepotRepository;
import tn.esprit.devdream.repositories.StageRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ApplicationServiceImpl  implements IApplicationService {
    @Autowired
    ApplicationRepository applicationRepository;
    @Autowired
    StageRepository stageRepository;
    @Autowired
    DepotRepository depotRepository;

    @Override
    public List<Application> retrieveAllApplications() {

        return applicationRepository.findAll();
    }

    @Override
    public Application retrieveApplication(Long id) {
        return applicationRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Application not found with id: " + id));
    }

    @Override
    public Application addApplication(Application c) {
        User applicateur = new User();


        c.setEtudiant(applicateur);






        c.setEtat(Etat.Encours);

        return applicationRepository.save(c);
    }

    @Override
    public void removeApplication(Long id) {
        applicationRepository.deleteById(id);
    }

    @Override
    public Application modifyApplication(Application application) {
        Optional<Application> existingApplication = applicationRepository.findById(application.getId_application());
        if (existingApplication.isPresent()) {
            return applicationRepository.save(application);
        } else {
            throw new EntityNotFoundException("Application not found with id: " + application.getId_application());
        }
    }

    @Override
    public Depot applicationaccept(Application c) {
            c.setEtat(Etat.Accepte);
            Depot depot = new Depot();
            Stage stage = new Stage();

            stage.setOffre(c.getOffre());
            stage.setStagiere(c.getEtudiant());
            stage.setMaitrestage(c.getOffre().getCreator());
            stage.setStagiere(c.getEtudiant());
            stage.setDepot(depot);

            depot.setStage(stage);
            depot.setEtudiant(c.getEtudiant());

            stage = stageRepository.save(stage);
            depot = depotRepository.save(depot);
            return depot;


    }


}