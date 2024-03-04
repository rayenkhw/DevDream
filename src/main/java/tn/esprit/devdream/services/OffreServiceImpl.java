package tn.esprit.devdream.services;

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

}