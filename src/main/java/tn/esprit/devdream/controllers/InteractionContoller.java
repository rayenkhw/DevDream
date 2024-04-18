package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Interaction;
import tn.esprit.devdream.services.IInteractionServiceImpl;

import java.util.Optional;

@RestController
@RequestMapping("/api/interactions")
@CrossOrigin(origins ="http://localhost:4200")
public class InteractionContoller {
    IInteractionServiceImpl interactionService;
    @Autowired
    public InteractionContoller(IInteractionServiceImpl interactionService) {
        this.interactionService = interactionService;
    }
    @PostMapping("/like/{id_Post}/{id}")
    public ResponseEntity<?> toggleLike(@PathVariable Long id_Post, @PathVariable Long id) {
        Optional<Interaction> interaction = interactionService.toggleLike(id_Post, id);
        return interaction.isPresent() ?
                ResponseEntity.ok(interaction.get()) : ResponseEntity.ok("Like toggled off");
    }

    @PostMapping("/dislike/{id_Post}/{id}")
    public ResponseEntity<?> toggleDislike(@PathVariable Long id_Post, @PathVariable Long id) {
        Optional<Interaction> interaction = interactionService.toggleDislike(id_Post, id);
        return interaction.isPresent() ?
                ResponseEntity.ok(interaction.get()) : ResponseEntity.ok("Dislike toggled off");
    }

    @PostMapping("/love/{id_Post}/{id}")
    public ResponseEntity<?> toggleLove(@PathVariable Long id_Post, @PathVariable Long id) {
        Optional<Interaction> interaction = interactionService.toggleLove(id_Post, id);
        return interaction.isPresent() ?
                ResponseEntity.ok(interaction.get()) : ResponseEntity.ok("Love toggled off");
    }
    @GetMapping("/likes/count/{id_Post}")
    public ResponseEntity<Integer> getLikesCount(@PathVariable Long id_Post) {
        int count = interactionService.getLikesCount(id_Post);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

    @GetMapping("/dislikes/count/{id_Post}")
    public ResponseEntity<Integer> getDislikesCount(@PathVariable Long id_Post) {
        int count = interactionService.getDislikesCount(id_Post);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

    @GetMapping("/loves/count/{id_Post}")
    public ResponseEntity<Integer> getLovesCount(@PathVariable Long id_Post) {
        int count = interactionService.getLovesCount(id_Post);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

}
