package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Offre;

import java.util.List;

public interface IOffreService {
    public List<Offre> retrieveAllOffres();
    public Offre retrieveOffre(Long id);
    public Offre addOffre(Offre c);
    public void removeOffre(Long id);
    public Offre modifyOffre(Offre Offre);

    public Application applytooffer(Offre offre);
}