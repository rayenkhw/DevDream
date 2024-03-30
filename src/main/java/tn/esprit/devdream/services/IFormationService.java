package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Formation;

import java.util.List;
import java.util.Map;

public interface IFormationService {
    Formation addFormation(Formation f);

    void removeFormation(Long id_formation);

    Formation modifyFormation(Formation f);

    List<Formation> retrieveAllFormations();

    Formation retrieveformation(Long id_formation);
    List<Formation> searchFormations(String motCle);

    Map<String, Long> getStatisticsformation();

    Formation likeFormation(long id_formation);
}
