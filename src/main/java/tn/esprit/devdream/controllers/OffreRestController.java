package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Offre;
import tn.esprit.devdream.services.IOffreService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/offre")
public class OffreRestController {
    IOffreService offreService;

    @GetMapping("/retrieve-all-offres")
    public List<Offre> getOffres() {
        List<Offre> listOffres = offreService.retrieveAllOffres();
        return listOffres;
    }

    @GetMapping("/retrieve-offre/{offre-id}")
    public Offre retrieveOffre(@PathVariable("offre-id") Long offreId) {
        Offre offre = offreService.retrieveOffre(offreId);
        return offre;
    }

    @PostMapping("/add-offre")
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
}