package tn.esprit.devdream.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.RessourceNotFound.NotFoundException;
import tn.esprit.devdream.entities.Tache;
import tn.esprit.devdream.entities.Tache_status;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.IEncadrementRepository;
import tn.esprit.devdream.repositories.IEtiquetteRepository;
import tn.esprit.devdream.repositories.ITacheRepository;
import tn.esprit.devdream.repositories.IUserRepository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;


@Service
public class TacheServiceImpl implements ITacheService{
    private static final Logger logger = LoggerFactory.getLogger(TacheServiceImpl.class);
    @Autowired
    ITacheRepository iTacheRepository;
    @Autowired
    IEtiquetteRepository iEtiquetteRepository;
    @Autowired
    IUserRepository iUserRepository;
    @Autowired
   private MailService mailService;
    @Autowired
    private IEncadrementRepository iEncadrementRepository;

    @Override
    public List<Tache> retrieveAllTaches() {
        return iTacheRepository.findAll();
    }

    @Override
    public Tache retrieveTache(Long tacheId) {
        return iTacheRepository.findById(tacheId).get();
    }

    @Override
    public Tache addTache(Tache tache) {
        return iTacheRepository.save(tache);
    }

    @Override
    public void removeTache(Long tacheId) {
iTacheRepository.deleteById(tacheId);
    }

    @Override
    public Tache modifyTache(Tache tache) {
        return iTacheRepository.save(tache);
    }

@Override
    public Tache assignerTacheTodo(Long idEncadrant, Long idEtudiant, Tache tache) {
        User encadrant = iUserRepository.findById(idEncadrant).orElseThrow(() -> new NotFoundException("Encadrant introuvable"));
        User etudiant = iUserRepository.findById(idEtudiant).orElseThrow(() -> new NotFoundException("Étudiant introuvable"));

        tache.setEncadrant(encadrant);
        tache.setEtudiant(etudiant);
    tache.setStatus(Tache_status.Todo);
        return iTacheRepository.save(tache);
    }

    @Override
    public void marquerTacheInProgress(Long tacheId) {
        // Vérifier si la tâche existe
        Optional<Tache> optionalTache = iTacheRepository.findById(tacheId);
        if (optionalTache.isPresent()) {
            Tache tache = optionalTache.get();

            // Vérifier si la tâche est en "todo"
            if (tache.getStatus() == Tache_status.Todo) {
                // Mettre à jour le statut de la tâche en "in progress"
                tache.setStatus(Tache_status.InProgress);
                iTacheRepository.save(tache);
            } else {
                // Gérer le cas où la tâche n'est pas en "todo"
                // Ici, vous pouvez lancer une exception ou gérer le cas de votre choix
                // Par exemple :
                throw new IllegalStateException("La tâche n'est pas en statut 'todo'.");
            }
        } else {
            // Gérer le cas où la tâche n'existe pas
            // Ici, vous pouvez lancer une exception ou gérer le cas de votre choix
            // Par exemple :
            throw new NotFoundException("La tâche avec l'ID " + tacheId + " n'existe pas.");
        }
    }

    @Override
    public void marquerTacheDone(Long tacheId) {
        // Récupérer la tâche par son ID
        Tache tache = iTacheRepository.findById(tacheId)
                .orElseThrow(() -> new NotFoundException("Tâche introuvable"));

        // Vérifier si la tâche est en cours
        if (tache.getStatus() != Tache_status.InProgress) {
            throw new IllegalStateException("La tâche doit être en cours pour être marquée comme terminée.");
        }

        // Mettre à jour le statut de la tâche
        tache.setStatus(Tache_status.Done);
        iTacheRepository.save(tache);
    }


    @Override
    public List<Tache> getTachesByStatus(Tache_status status) {
        return iTacheRepository.findByStatusEquals(status);
    }
    @Override
    public long countTachesByStatus(Tache_status status) {
        return iTacheRepository.countByStatusEquals(status);
    }
    @Override
    public List<Tache> getTachesEtudiant(Long idEtudiant) {
        // Implémentez la logique pour récupérer les tâches de l'étudiant en fonction de son ID
        // Cela dépendra de la structure de vos données et de votre logique métier

        // Exemple de récupération des tâches pour un étudiant en utilisant un repository Spring Data JPA :
        return iTacheRepository.findTachesByEtudiant_Id(idEtudiant);
    }

   @Override
    public List<Tache> getTachesEtudiantByIdentifiant(String identifiant) {
        return iTacheRepository.findTacheByEtudiantIdentifiant(identifiant);
    }

@Override
    public List<Tache> getTachesByEtudiantIdentifiant(String identifiant) {
      /*  User user = iUserRepository.findUserByIdentifiant(identifiant);
        if (user != null) {
            return iTacheRepository.findTachesByEtudiant(user);
        }
        return null; // Ou une autre logique de gestion si l'utilisateur n'est pas trouvé*/
    return null;
    }

    @Override
    public Tache assignerTacheTodoByIdentifiant(String identifiantEncadrant, String identifiantEtudiant, Tache tache) {
        User encadrant=iUserRepository.findUserByIdentifiant(identifiantEncadrant);
        User etudiant=iUserRepository.findUserByIdentifiant(identifiantEtudiant);
        tache.setEncadrant(encadrant);
        tache.setEtudiant(etudiant);
        tache.setStatus(Tache_status.Todo);
        // Enregistrer la tâche dans la base de données
        Tache tacheAssignee = iTacheRepository.save(tache);

        String destinataire = etudiant.getEmail();  // Supposons que l'entité User a un champ email
        String sujet = "Nouvelle tâche assignée";
        String contenu = "Cher étudiant," + etudiant.getPrenom() + "\n\n,Une nouvelle tâche vous a été assignée:"+ tacheAssignee.getDescription() + " Veuillez consulter votre tableau de bord pour plus de détails. \n\nCordialement,\nVotre encadrant";

        mailService.sendEmailWithRetry(destinataire, sujet, contenu); // Appel à la méthode d'envoi d'e-mail

        return tacheAssignee;
    }


    @Override
    public Tache updateTacheStatus(Long id, Tache_status status) {
        Optional<Tache> optionalTache = iTacheRepository.findById(id);
        if (optionalTache.isPresent()) {
            Tache tache = optionalTache.get();
            tache.setStatus(status);
            return iTacheRepository.save(tache);
        }
        return null;
    }
@Override
    public List<Tache> getTachesAffectees(User etudiant, User encadrant) {
        return iTacheRepository.findByEtudiantAndEncadrant(etudiant, encadrant);
    }

@Override
    public List<Tache> getTachesEtudiantsEncadres(Long encadrantId) {
        List<User> etudiantsEncadres = iEncadrementRepository.findEtudiantsEncadres(encadrantId);
        return iTacheRepository.findByEtudiantIn(etudiantsEncadres);
    }

    @Override
    public long countTachesEncadrees(Long encadrantId) {
        // Récupérer la liste des étudiants encadrés par l'encadrant
        List<User> etudiantsEncadres = iEncadrementRepository.findEtudiantsEncadres(encadrantId);

        // Compter le nombre de tâches affectées à ces étudiants
        return iTacheRepository.countByEtudiantIn(etudiantsEncadres);
    }

    @Override
    public long countEtudiantsEncadres(Long encadrantId) {
        // Récupérer la liste des étudiants encadrés par l'encadrant
        List<User> etudiantsEncadres = iEncadrementRepository.findEtudiantsEncadres(encadrantId);

        // Retourner le nombre d'étudiants encadrés
        return etudiantsEncadres.size();
    }
    @Override
    public long countTachesTermineesEncadrees(Long encadrantId) {
        // Récupérer la liste des étudiants encadrés par l'encadrant
        List<User> etudiantsEncadres = iEncadrementRepository.findEtudiantsEncadres(encadrantId);

        // Compter le nombre de tâches terminées affectées à ces étudiants
        return iTacheRepository.countByStatusEqualsAndEtudiantIn(Tache_status.Done, etudiantsEncadres);
    }

@Override
    public Tache getTacheDetailsByIdAndEncadrantAndEtudiant(Long idTache, String encadrantIdentifiant, String etudiantIdentifiant) {

        return iTacheRepository.findTacheByIdAndEncadrantAndEtudiant(idTache, encadrantIdentifiant, etudiantIdentifiant);
    }
    @Override
    public List<Tache> getExpiringTasks(int days) {
        LocalDate today = LocalDate.now();
        LocalDate expirationDate = today.plusDays(days);

        // Formatter la date d'expiration en format de chaîne
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String expirationDateString = expirationDate.format(formatter);

        // Appeler la méthode findByDelaiBefore avec la date d'expiration sous forme de chaîne
        return iTacheRepository.findByDelaiBefore(expirationDateString);
    }

}
