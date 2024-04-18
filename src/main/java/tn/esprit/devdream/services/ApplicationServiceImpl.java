package tn.esprit.devdream.services;

import com.postmarkapp.postmark.client.exception.PostmarkException;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Depot;
import tn.esprit.devdream.entities.Etat;
import tn.esprit.devdream.entities.Stage;
import tn.esprit.devdream.repositories.ApplicationRepository;
import tn.esprit.devdream.repositories.DepotRepository;
import tn.esprit.devdream.repositories.IStageRepository;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ApplicationServiceImpl  implements IApplicationService {
    @Autowired
    ApplicationRepository applicationRepository;
    @Autowired
    IStageRepository stageRepository;
    @Autowired
    DepotRepository depotRepository;

    @Autowired private JavaMailSender javaMailSender;

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
    public Depot applicationaccept(Long id_application) throws PostmarkException, IOException {
        LocalDateTime localDateTime = LocalDateTime.now();
        Date date = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
        Application c = applicationRepository.findApplicationById_application(id_application);
        c.setEtat(Etat.Accepte);
        Depot depot = new Depot();
        Stage stage = new Stage();

        stage.setOffre(c.getOffre());
        stage.setStagiere(c.getEtudiant());
        //stage.setMaitrestage(c.getOffre().getCreator());
        stage.setDate_debut(date);

        // Set the stage before saving the depot
        depot.setStage(stage);
        depot.setEtudiant(c.getEtudiant());

        // Save the stage first
        stage = stageRepository.save(stage);

        // Then save the depot
        depot = depotRepository.save(depot);

        // Save the application
        c = applicationRepository.save(c);


        // Creating a simple mail message
        SimpleMailMessage mailMessage
                = new SimpleMailMessage();

        // Setting up necessary details
        mailMessage.setFrom("khalfaoui1rayen@gmail.com");
        mailMessage.setTo("challangour555@gmail.com");
        mailMessage.setText("Application");
        mailMessage.setSubject("hello rayen your application to offre.getTitre() has been accepted");

        // Sending the mail
        javaMailSender.send(mailMessage);



        return depot;
    }

    @Override
    public void applicationrefuser(Long id_application) {
        Application c = applicationRepository.findApplicationById_application(id_application);
        c.setEtat(Etat.Refuse);
        applicationRepository.save(c);

    }


}