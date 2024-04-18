package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Tache;
import tn.esprit.devdream.entities.Tache_status;
import tn.esprit.devdream.entities.User;

import java.util.List;

public interface ITacheService {
    public List<Tache> getExpiringTasks(int days);
    public List<Tache> retrieveAllTaches();
    public Tache retrieveTache(Long tacheId);
    public Tache addTache(Tache tache);
    public void removeTache(Long tacheId);
    public Tache modifyTache(Tache tache);
    public Tache assignerTacheTodo(Long idEncadrant, Long idEtudiant, Tache tache);
    public void marquerTacheInProgress(Long tacheId);
    public void marquerTacheDone(Long tacheId);
    public List<Tache> getTachesByStatus(Tache_status status);
    public long countTachesByStatus(Tache_status status);
    public List<Tache> getTachesEtudiant(Long idEtudiant);
    public List<Tache> getTachesEtudiantByIdentifiant(String identifiant);
    public List<Tache> getTachesByEtudiantIdentifiant(String identifiant);
    public Tache assignerTacheTodoByIdentifiant(String identifiantEncadrant, String identifiantEtudiant, Tache tache);
    public Tache updateTacheStatus(Long id, Tache_status status);
    public List<Tache> getTachesAffectees(User etudiant, User encadrant );
    public List<Tache> getTachesEtudiantsEncadres(Long encadrantId);
    public long countTachesEncadrees(Long encadrantId);
    public long countEtudiantsEncadres(Long encadrantId);
    public long countTachesTermineesEncadrees(Long encadrantId);
    public Tache getTacheDetailsByIdAndEncadrantAndEtudiant(Long idTache, String encadrantIdentifiant, String etudiantIdentifiant);


}
