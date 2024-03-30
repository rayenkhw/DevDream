package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Offre;
import tn.esprit.devdream.entities.User;

import java.util.List;
import java.util.Map;

public interface IOffreService {
    public List<Offre> retrieveAllOffres();

    public Offre retrieveOffre(Long id_offre);

    public Offre addOffre(Offre o);

    public void removeOffre(Long id_offre);

    public Offre modifyOffre(Offre o);

    public Application applytooffer(Offre o);


    List<Offre> searchOffers(String keywords);

    List<User> getEtudiantsparoffre(Long id_offre);

    void accepterEtudiant(Long id_offre, Long id);

    Offre addOffreWithRates(Offre offre);

    Map<String, Long> getStatistics();
}