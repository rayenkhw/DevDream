package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.RessourceNotFound.NotFoundException;
import tn.esprit.devdream.entities.Commentaire;
import tn.esprit.devdream.services.ICommentaireService;

import java.util.List;

@RestController
//@CrossOrigin(origins = "*")
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/commentaire")

public class CommentaireController {
    @Autowired
    ICommentaireService commentaireService;

    @PostMapping("/addcommentaire")
    public Commentaire addCommentaire(@RequestBody Commentaire commentaire){
        return commentaireService.addCommentaire(commentaire) ;
    }


    @GetMapping("/retrieve-all-commentaires")
    public List<Commentaire> getCommentaires() {
        List<Commentaire> listCommentaires = commentaireService.retrieveAllCommentaires();
        return listCommentaires;
    }


    @GetMapping("/retrieve-commentaire/{commentaire-id}")
    public Commentaire retrieveCommentaire(@PathVariable("commentaire-id") Long commentaireId) {
        Commentaire commentaire = commentaireService.retrieveCommentaire(commentaireId);
        return commentaire;
    }
    @DeleteMapping("/remove-commentaire/{commentaire-id}")
    public void removeCommentaire(@PathVariable("commentaire-id") Long commentaireId) {
        commentaireService.removeCommentaire(commentaireId);
    }

    @PutMapping("/modify-commentaire/{commentaire-id}")
    public Commentaire modifyCommentaire(@PathVariable("commentaire-id") Long commentaireId,@RequestBody Commentaire c) {
        c.setId_comment(commentaireId);
        Commentaire commentaire = commentaireService.modifyCommentaire(c);
        return commentaire;
    }

    @PostMapping("/tache/{tacheId}")
    public ResponseEntity<String> ajouterCommentaireATache(@PathVariable Long tacheId, @RequestBody Commentaire commentaire) {
        commentaireService.ajouterCommentaireATache(tacheId, commentaire);
        return ResponseEntity.ok("Commentaire ajouté à la tâche avec succès.");
    }

    @GetMapping("/{tacheId}")
    public ResponseEntity<List<Object[]>> getCommentsWithUsersByTacheId(@PathVariable Long tacheId) {
        List<Object[]> commentsWithUsers = commentaireService.findCommentsWithUserByTacheId(tacheId);
        return ResponseEntity.ok(commentsWithUsers);
    }

    @PostMapping("/{tacheId}/utilisateurs/{userId}")
    public ResponseEntity<Commentaire> ajouterCommentaire(
            @PathVariable Long tacheId,
            @PathVariable Long userId,
            @RequestBody String contenu) {
        Commentaire nouveauCommentaire = commentaireService.ajouterCommentaire(tacheId, contenu, userId);
        return ResponseEntity.ok(nouveauCommentaire);
    }
    @PutMapping("/commentaires/{commentaireId}")
    public ResponseEntity<Commentaire> updateCommentaire(@PathVariable Long  commentaireId,
                                                         @RequestBody String nouveauContenu,
                                                         @RequestParam Long tacheId,
                                                         @RequestParam Long userId) {
        // Vérifie si l'utilisateur est autorisé à commenter la tâche
        try {
            Commentaire updatedCommentaire = commentaireService.UpdateCommentaire(commentaireId, nouveauContenu, tacheId, userId);
            return ResponseEntity.ok(updatedCommentaire);
        } catch (NotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
