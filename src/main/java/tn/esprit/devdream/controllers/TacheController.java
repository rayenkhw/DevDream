package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.RessourceNotFound.NotFoundException;
import tn.esprit.devdream.entities.Tache;
import tn.esprit.devdream.entities.Tache_status;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.services.ITacheService;
import tn.esprit.devdream.services.IUserService;
import tn.esprit.devdream.services.MailService;

import java.util.List;

@RestController
@RequestMapping("/tache")
@CrossOrigin(origins = "*")
public class TacheController {
    @Autowired
    ITacheService iTacheService;
    @Autowired
    private MailService mailService;
    @Autowired
    IUserService iUserService;

    @PostMapping("/assigner-Tache-Encadrant-To-studiant")
    public ResponseEntity<Tache> assignerTache(
            @RequestParam Long idEncadrant,
            @RequestParam Long idEtudiant,
            @RequestBody Tache tache) {
        Tache nouvelleTache = iTacheService.assignerTacheTodo(idEncadrant, idEtudiant, tache);

        // Récupérer l'utilisateur étudiant à partir de son ID
        User etudiant = iUserService.findById(idEtudiant);

        // Vérifier si l'utilisateur étudiant existe
        if (etudiant != null) {
            // Envoyer un e-mail à l'étudiant
            mailService.sendNewTaskNotification(etudiant, tache);
            return ResponseEntity.ok(nouvelleTache);
        } else {
            // Gérer le cas où l'étudiant n'est pas trouvé
            String message = "L'étudiant avec l'ID " + idEtudiant + " n'a pas été trouvé.";
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("/addtache")
    public Tache addTache(@RequestBody Tache tache ){
        return iTacheService.addTache(tache);
    }

    @GetMapping("/retrieve-all-Taches")
    public List<Tache> getTaches() {
        List<Tache> listTaches = iTacheService.retrieveAllTaches();
        return listTaches;
    }
    @GetMapping("/retrieve-tache/{tache-id}")
    public Tache retrieveTache(@PathVariable("tache-id") Long tacheId) {
        Tache tache  = iTacheService.retrieveTache(tacheId);
        return tache;
    }
    @DeleteMapping("/remove-tache/{tache-id}")
    public void removeTache(@PathVariable("tache-id") Long tacheId) {
        iTacheService.removeTache(tacheId);
    }

    @PutMapping("/modify-tache/{tache-id}")
    public Tache modifyTache(@PathVariable("tache-id") Long tacheId,@RequestBody Tache c) {
        c.setId_tache(tacheId);
        Tache tache = iTacheService.modifyTache(c);
        return tache;
    }
  /*  @PostMapping("/assigner-Tache-Encadrant-To-studiant")
    public ResponseEntity<Tache> assignerTache(
            @RequestParam Long idEncadrant,
            @RequestParam Long idEtudiant,
            @RequestBody Tache tache) {
        Tache nouvelleTache = iTacheService.assignerTacheTodo(idEncadrant, idEtudiant, tache);
        return ResponseEntity.ok(nouvelleTache);
    }*/
    @PostMapping("/assigner-Tache-ByIdentifiant")
    public ResponseEntity<Tache> assignerTacheTodoByIdentifiant(
            @RequestParam String identifiantEncadrant,
            @RequestParam String identifiantEtudiant,
            @RequestBody Tache tache){
        Tache nouvelletache=iTacheService.assignerTacheTodoByIdentifiant(identifiantEncadrant, identifiantEtudiant, tache);
        return ResponseEntity.ok(nouvelletache);
    }

    @PutMapping("/marquer-in-progress/{tacheId}")
    public ResponseEntity<String> marquerTacheInProgress(@PathVariable Long tacheId) {
        try {
            iTacheService.marquerTacheInProgress(tacheId);
            return ResponseEntity.ok("La tâche a été marquée comme en cours.");
        } catch (NotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/marquer-done/{tacheId}")
    public ResponseEntity<String> marquerTacheDone(@PathVariable Long tacheId) {
        try {
            iTacheService.marquerTacheDone(tacheId);
            return ResponseEntity.ok("La tâche a été marquée comme terminée.");
        } catch (NotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/todo")
    public ResponseEntity<List<Tache>> getTachesTodo() {
        List<Tache> tachesTodo = iTacheService.getTachesByStatus(Tache_status.Todo);
        return ResponseEntity.ok(tachesTodo);
    }

    @GetMapping("/in-progress")
    public ResponseEntity<List<Tache>> getTachesInProgress() {
        List<Tache> tachesInProgress = iTacheService.getTachesByStatus(Tache_status.InProgress);
        return ResponseEntity.ok(tachesInProgress);
    }

    @GetMapping("/done")
    public ResponseEntity<List<Tache>> getTachesDone() {
        List<Tache> tachesDone = iTacheService.getTachesByStatus(Tache_status.Done);
        return ResponseEntity.ok(tachesDone);
    }

    @GetMapping("/todo/count")
    public ResponseEntity<Long> getTachesTodoCount() {
        long count = iTacheService.countTachesByStatus(Tache_status.Todo);
        return ResponseEntity.ok(count);
    }

    @GetMapping("/in-progress/count")
    public ResponseEntity<Long> getTachesInProgressCount() {
        long count = iTacheService.countTachesByStatus(Tache_status.InProgress);
        return ResponseEntity.ok(count);
    }

    @GetMapping("/done/count")
    public ResponseEntity<Long> getTachesDoneCount() {
        long count = iTacheService.countTachesByStatus(Tache_status.Done);
        return ResponseEntity.ok(count);
    }

    @GetMapping("/taches-etudiant/{idEtudiant}")
    public List<Tache> getTachesEtudiant(@PathVariable Long idEtudiant) {
        return iTacheService.getTachesEtudiant(idEtudiant);
    }
    @GetMapping("/taches-etudiantidentifiant/{identifiant}")
    public ResponseEntity<List<Tache>> getTachesEtudiantByIdentifiant(@PathVariable String identifiant) {
        List<Tache> taches = iTacheService.getTachesEtudiantByIdentifiant(identifiant);
        return ResponseEntity.ok(taches);
    }
  /* @GetMapping("/taches-etudiantidentifiant/{identifiant}")
   public ResponseEntity<List<Tache>> getTachesEtudiantByIdentifiant(@PathVariable String identifiant) {
       List<Tache> taches = iTacheService.getTachesByEtudiantIdentifiant(identifiant);
       return ResponseEntity.ok(taches);
   }*/

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateTacheStatus(@PathVariable Long id, @RequestParam Tache_status status) {
        Tache updatedTache = iTacheService.updateTacheStatus(id, status);
        if (updatedTache != null) {
            return ResponseEntity.ok(updatedTache);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/affectees/{etudiantId}/{encadrantId}")
    public ResponseEntity<List<Tache>> getTachesAffectees(@PathVariable Long etudiantId, @PathVariable Long encadrantId ) {
        // Vous devrez récupérer les utilisateurs encadrant et étudiant à partir de leur ID
        User encadrant = iUserService.findById(encadrantId);
        User etudiant = iUserService.findById(etudiantId);

        List<Tache> taches = iTacheService.getTachesAffectees(etudiant, encadrant );
        return new ResponseEntity<>(taches, HttpStatus.OK);
    }







}
