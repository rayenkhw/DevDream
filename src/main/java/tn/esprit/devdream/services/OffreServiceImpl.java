package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Offre;
import tn.esprit.devdream.entities.Rate;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.ApplicationRepository;
import tn.esprit.devdream.repositories.OffreRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Service
@AllArgsConstructor
public class OffreServiceImpl implements IOffreService {
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

    @Override
    public List<Offre> searchOffers(String keywords) {
        return offreRepository.findByTitreOrSkillsOrDureeOrGouvernoratOrVille(keywords, keywords,keywords,keywords,keywords);
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

    @Override
    public Offre addOffreWithRates(Offre offre) {
        for (Rate rate : offre.getRates()) {
            rate.setOffre(offre);
        }
        return offreRepository.save(offre);
    }

    @Override
    public Map<String, Long> getStatistics() {
        Map<String, Long> statistics = new HashMap<>();
        statistics.put("nombreTotalOffres", offreRepository.count());
        // Autres statistiques à collecter
        return statistics;
    }

}


//    public void accepterEtudiant(Long id_offre, Long id) {
//        Offre offre = offreRepository.findById(id_offre)
//                .orElseThrow(() -> new NotFoundException("Offre de stage non trouvée"));
//        User etudiant = userRepository
//
//
//    }


