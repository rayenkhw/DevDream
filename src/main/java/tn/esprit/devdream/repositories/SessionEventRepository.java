package tn.esprit.devdream.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.SessionEvent;

@Repository
public interface SessionEventRepository extends CrudRepository <SessionEvent, Integer>{

}
