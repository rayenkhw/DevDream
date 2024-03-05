package tn.esprit.devdream.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.OCTeam;

@Repository
public interface OCTeamRepository extends CrudRepository <OCTeam, Integer>{

}
