package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Reponse;
import tn.esprit.devdream.services.IReclamationService;
import tn.esprit.devdream.services.IReponseService;

import java.util.List;

@RestController
@RequestMapping("/reponse")
@CrossOrigin(origins = "http://localhost:4200")
public class ReponseRestController {
    @Autowired
    IReponseService reponseService;
    @Autowired
    IReclamationService reclamationService;
    @GetMapping("/retrieve-all-reponses")
    public List<Reponse> getReponses() {
        List<Reponse> listReponses = reponseService.retrieveAllReponse();
        return listReponses;
    }
    @GetMapping("/retrieve-reponse")
    public Reponse retrieveReponse(@PathVariable("idReponse") Long idReponse) {
        Reponse reponse = reponseService.retrieveReponse(idReponse);
        return reponse;
    }
    @PostMapping("/addReponseaffectReclamationsendNotification/{idReclamation}")
    public Reponse addReponseaffectReclamationsendNotification(@RequestBody Reponse re, @PathVariable("idReclamation") Long idReclamation) {
        Reponse reponse = reponseService.addReponseandaffectReclamationsendNotification(re, idReclamation);
        return  reponse;
    }
    @DeleteMapping("/remove-reponse/{idReponse}")
    public  void removeReponse(@PathVariable("idReponse")Long idReponse) {
        reponseService.removeReponse(idReponse);
    }
    @PutMapping("/modify-reponse")
    public Reponse modifyReponse(@RequestBody Reponse reponse) {
        Reponse modifyReponse = reponseService.modifyReponse(reponse);
        return modifyReponse;
    }
}
