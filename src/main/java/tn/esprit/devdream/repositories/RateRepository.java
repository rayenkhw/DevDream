package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Rate;

@Repository
public interface RateRepository extends JpaRepository<Rate,Long> {
}
