package tn.esprit.devdream.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Logistiques;

@Repository
public interface LogistiquesRepository extends CrudRepository <Logistiques, Integer>{
    Logistiques findByAccessory(String accessory);
}
