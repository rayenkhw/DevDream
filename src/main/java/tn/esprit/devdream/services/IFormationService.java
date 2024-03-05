package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Formation;

import java.util.List;

public interface IFormationService {
    Formation addFormation(Formation f);

    void removeFormation(Long id_formation);

    Formation modifyFormation(Formation f);

    List<Formation> retrieveAllFormations();

    Formation retrieveformation(Long id_formation);

    Formation addJadoreToFormation(long id_formation);


    List<Formation> searchFormations(String motCle);
}
