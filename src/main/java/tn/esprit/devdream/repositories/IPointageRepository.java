package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Pointage;

@Repository
public interface IPointageRepository extends JpaRepository<Pointage,Long> {
}
