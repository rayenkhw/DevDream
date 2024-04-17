package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Tache;
import tn.esprit.devdream.entities.Tache_status;
import tn.esprit.devdream.entities.User;

import java.util.List;

@Repository
public interface ITacheRepository extends JpaRepository<Tache, Long> {

    List<Tache> findByDelaiBefore(String delai);
    @Query("select t from Tache t where t.Status = :status")
    public List<Tache> findByStatusEquals(@Param("status") Tache_status tacheStatus);

    @Query("SELECT COUNT(t) FROM Tache t WHERE t.Status = :status")
    Long countByStatusEquals(@Param("status") Tache_status tacheStatus);
    @Query("select t from Tache t join User u on t.etudiant.id=:idEtudiant")
    public List<Tache> findTachesByEtudiant_Id(@Param("idEtudiant") long idEtudiant);

   // @Query("SELECT DISTINCT t FROM Tache t JOIN t.etudiant e WHERE e.identifiant = :idt")
 /*  @Query("SELECT t FROM Tache t WHERE t.etudiant.identifiant = :identifiant")
    List<Tache> findTachesByEtudiantIdentifiant(@Param("identifiant") String identifiant);*/

    @Query("SELECT t FROM Tache t WHERE t.etudiant = :etudiant")
    List<Tache> findTachesByEtudiant(@Param("etudiant") User etudiant);
    List<Tache> findByEtudiant_Identifiant(String identifiant);


    @Query("select t from Tache t join User u on t.etudiant.identifiant=:identifiant")
    List<Tache> findTacheByEtudiantIdentifiant(@Param("identifiant") String identifiant);


List<Tache> findByEtudiantAndEncadrant(User encadrant,User etudiant);
    List<Tache> findByEtudiantIn(List<User> etudiants);
    Long countByEtudiantIn(List<User> etudiants);
    @Query("SELECT COUNT(t) FROM Tache t WHERE t.Status = :status AND t.etudiant IN :etudiants")
    long countByStatusEqualsAndEtudiantIn(@Param("status") Tache_status status, @Param("etudiants") List<User> etudiants);
    @Query("SELECT t FROM Tache t WHERE t.id = :idTache AND t.encadrant.identifiant = :encadrantIdentifiant AND t.etudiant.identifiant = :etudiantIdentifiant")
    Tache findTacheByIdAndEncadrantAndEtudiant(@Param("idTache") Long idTache, @Param("encadrantIdentifiant") String encadrantIdentifiant, @Param("etudiantIdentifiant") String etudiantIdentifiant);
















}