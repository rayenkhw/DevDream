package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Commentaire;

import java.util.List;

@Repository
public interface ICommentaireRepository extends JpaRepository<Commentaire, Long> {
    @Query("SELECT c, etudiant, encadrant FROM Tache t JOIN t.commentaireList c JOIN t.etudiant etudiant JOIN t.encadrant encadrant WHERE t.id_tache = :tacheId")
    public List<Object[]> findCommentsWithUserByTacheId(@Param("tacheId") Long tacheId);




}
