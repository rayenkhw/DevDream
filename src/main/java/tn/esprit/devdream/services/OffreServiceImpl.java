package tn.esprit.devdream.services;

<<<<<<< HEAD
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Offre;
import tn.esprit.devdream.repositories.OffreRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OffreServiceImpl  implements IOffreService {
    OffreRepository offreRepository;
    @Override
    public List<Offre> retrieveAllOffres() {
        return offreRepository.findAll();
    }

    @Override
    public Offre retrieveOffre(Long id) {
        return offreRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Offre not found with id: " + id));
    }

    @Override
    public Offre addOffre(Offre c) {
        return offreRepository.save(c);
    }

    @Override
    public void removeOffre(Long id) {
        offreRepository.deleteById(id);
    }

    @Override
    public Offre modifyOffre(Offre offre) {
        Optional<Offre> existingOffre = offreRepository.findById(offre.getId_offre());
        if (existingOffre.isPresent()) {
            return offreRepository.save(offre);
        } else {
            throw new EntityNotFoundException("Offre not found with id: " + offre.getId_offre());
        }
=======
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Offre;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.ApplicationRepository;
import tn.esprit.devdream.repositories.OffreRepository;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@AllArgsConstructor
public class OffreServiceImpl  implements IOffreService {
    @Autowired
    OffreRepository offreRepository;
    @Autowired
    ApplicationRepository applicationRepository;
    @Override
    public List<Offre> retrieveAllOffres() {
        log.info("Liste des Offres: {}", offreRepository.findAll());
        return offreRepository.findAll();


    }

    @Override
    public Offre retrieveOffre(Long id_offre) {
        return offreRepository.findById(id_offre).get();
    }

    @Override
    public Offre addOffre(Offre o) {
        return offreRepository.save(o);
    }

    @Override
    public void removeOffre(Long id_offre) {
        offreRepository.deleteById(id_offre);
    }

    @Override
    public Offre modifyOffre(Offre id_offre) {
        return offreRepository.save(id_offre);
>>>>>>> origin/ranimback
    }

    @Override
    public Application applytooffer(Offre offre) {
        Application application = new Application();
        application.setOffre(offre);
        List<Application> listeapp = offre.getApplicationList();
        listeapp.add(application);
        offre.setApplicationList(listeapp);

        return application;
    }

<<<<<<< HEAD
=======
    @Override
    public List<Offre> searchOffers(String keywords) {
        return offreRepository.findByTitreOrSkillsOrDuree(keywords, keywords,keywords);
    }

    @Override
    public List<User> getEtudiantsparoffre(Long  id_offre) {
        List<Application> application = applicationRepository.findAllByIdOffre(id_offre);
        List<User> etudiants = application.stream()
                .map(Application::getEtudiant)
                .collect(Collectors.toList());

        return etudiants;
    }

    @Override
    public void accepterEtudiant(Long id_offre, Long id) {

    }


//    public void accepterEtudiant(Long id_offre, Long id) {
//        Offre offre = offreRepository.findById(id_offre)
//                .orElseThrow(() -> new NotFoundException("Offre de stage non trouvée"));
//        User etudiant = userRepository
//
//
//    }


>>>>>>> origin/ranimback
}