package tn.esprit.devdream.services;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devdream.entities.Reclamation;
import tn.esprit.devdream.entities.Reponse;

import java.util.List;

public interface IReponseService {
    public Reponse addReponseandaffectReclamationsendNotification(Reponse re,Long idReclamation);
    public Reponse modifyReponse(Reponse reponse);
    public List<Reponse> retrieveAllReponse();

    public Reponse retrieveReponse(Long idReponse);
    public void removeReponse(Long idReponse);
}
