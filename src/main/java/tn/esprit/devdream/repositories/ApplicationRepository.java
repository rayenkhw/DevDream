package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Application;

import java.util.List;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
    @Query("SELECT a FROM Application a WHERE a.id_application = :id")
    Application findApplicationById_application(@Param("id") Long id_application);

@Query("select a from Application a where a.offre.id_offre = :idOffre")
    List<Application> findAllByIdOffre(@Param("idOffre") Long id_offre);
}