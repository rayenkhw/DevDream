package tn.esprit.devdream.services;


import tn.esprit.devdream.entities.Reclamation;
import tn.esprit.devdream.entities.Reponse;

import java.util.List;

public interface IReclamationService {
    public Reclamation addReclamation(Reclamation r);
    public Reclamation modifyReclamation(Reclamation reclamation);
    public List<Reclamation> retrieveAllReclamation();

    public Reclamation retrieveReclamation(Long idReclamation);
    public void removeReclamation(Long idReclamation);
    public Reponse reclamationtraite(Long id) ;
}
