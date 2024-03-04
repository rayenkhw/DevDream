package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Offre;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.services.IOffreService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/offre")
@CrossOrigin("*")
public class OffreRestController {
    IOffreService offreService;

    @GetMapping("/retrieve-all-offres")
    public List<Offre> getOffres() {
        List<Offre> listOffres = offreService.retrieveAllOffres();
        return listOffres;
    }

    @GetMapping("/retrieve-offre/{offre-id}")
    public Offre retrieveOffre(@PathVariable("offre-id") Long id_offre) {
        Offre offre = offreService.retrieveOffre(id_offre);
        return offre;
    }

    @PostMapping("/add-offre")
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

}