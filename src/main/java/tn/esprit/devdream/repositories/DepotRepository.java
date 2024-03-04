package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Depot;

@Repository
public interface DepotRepository extends JpaRepository<Depot, Long> {
}