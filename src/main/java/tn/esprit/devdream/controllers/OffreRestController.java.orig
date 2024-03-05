package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Offre;
=======
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Offre;
import tn.esprit.devdream.entities.User;
>>>>>>> origin/ranimback
import tn.esprit.devdream.services.IOffreService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/offre")
<<<<<<< HEAD
=======
@CrossOrigin("*")
>>>>>>> origin/ranimback
public class OffreRestController {
    IOffreService offreService;

    @GetMapping("/retrieve-all-offres")
    public List<Offre> getOffres() {
        List<Offre> listOffres = offreService.retrieveAllOffres();
        return listOffres;
    }

    @GetMapping("/retrieve-offre/{offre-id}")
<<<<<<< HEAD
    public Offre retrieveOffre(@PathVariable("offre-id") Long offreId) {
        Offre offre = offreService.retrieveOffre(offreId);
=======
    public Offre retrieveOffre(@PathVariable("offre-id") Long id_offre) {
        Offre offre = offreService.retrieveOffre(id_offre);
>>>>>>> origin/ranimback
        return offre;
    }

    @PostMapping("/add-offre")
<<<<<<< HEAD
    public Offre addOffre(@RequestBody Offre c) {
        Offre offre = offreService.addOffre(c);
        return offre;
    }

    @DeleteMapping("/remove-offre/{offre-id}")
    public void removeOffre(@PathVariable("offre-id") Long offreId) {
        offreService.removeOffre(offreId);
    }

    @PutMapping("/modify-offre")
    public Offre modifyOffre(@RequestBody Offre c) {
        Offre offre = offreService.modifyOffre(c);
        return offre;
    }

    @PutMapping("/applytooffer")
    public Application applytooffer(@RequestBody Offre c){

        return applytooffer(c);
    }
=======
    public Offre addOffre(@RequestBody Offre o) {
        Offre offre = offreService.addOffre(o);
        return offre;
    }

        @DeleteMapping("/remove-offre/{offre-id}")
    public void removeOffre(@PathVariable("offre-id") Long id_offre) {
        offreService.removeOffre(id_offre);
    }

    @PutMapping("/modify-offre/{offre-id}")
    public Offre modifyOffre(@PathVariable ("offre-id") Long id_offre, @RequestBody Offre o) {
        o.setId_offre(id_offre);
        Offre offre = offreService.modifyOffre(o);
        return offre;
    }

@GetMapping("/search/{keywords}")
    public ResponseEntity<List<Offre>> searchOffers(@PathVariable String keywords){
        List<Offre> offres =offreService.searchOffers(keywords);
        return ResponseEntity.ok().body(offres);
}
@GetMapping("/getEtudiant/{offre-id}")
    public ResponseEntity<List<User>> getEtudiantsparoffre(@PathVariable("offre-id") Long id_offre){
       List<User> etudiants = offreService.getEtudiantsparoffre(id_offre);
       return ResponseEntity.ok().body(etudiants);
    }

>>>>>>> origin/ranimback
}