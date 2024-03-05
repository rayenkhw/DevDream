package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Reclamation;
import tn.esprit.devdream.entities.Reponse;
import tn.esprit.devdream.services.IReclamationService;

import java.util.List;
@RestController
@RequestMapping("/reclamation")
@CrossOrigin(origins = "*")
public class ReclamationRestController {
    @Autowired
    IReclamationService reclamationService;
    @CrossOrigin
    @GetMapping("/retrieve-all-reclamations")
    public List<Reclamation> getReclamations() {
        return reclamationService.retrieveAllReclamation();

    }
    @GetMapping("/retrieve-reclamation/{idReclamation}")
    public Reclamation retrieveReclamation(@PathVariable("idReclamation") Long idReclamation) {
        Reclamation reclamation = reclamationService.retrieveReclamation(idReclamation);
        return reclamation;
    }
    @PostMapping("/add-reclamation")
    public Reclamation addReclamation(@RequestBody Reclamation r) {
        Reclamation reclamation = reclamationService.addReclamation(r);
        return reclamation;
    }
    @DeleteMapping("/remove-reclamation/{id_Reclamation}")
    public  void removeReclamation(@PathVariable("idReclamation")Long idReclamation) {
        reclamationService.removeReclamation(idReclamation);
    }
    @PutMapping("/modify-reclamation")
    public Reclamation modifyReclamation(@RequestBody Reclamation reclamation) {
        Reclamation modifyReclamation = reclamationService.modifyReclamation(reclamation);
        return modifyReclamation;
    }
    @PostMapping("/reclamation-traite/{idReclamation}")
    public Reponse reclamationtraite(@PathVariable("idReclamation")Long idReclamation){
        Reponse reponse1 = reclamationService.reclamationtraite(idReclamation);
        return reponse1;
    }
//    @PostMapping("/affectReponseàReclamation/{idReclamation}")
//    public Reponse affectReponseReclamation(@RequestBody Reponse rep, @PathVariable("idReclamation") Long idReclamation){
//     Reponse rep = reclamationService.affectReponseReclamation(idReclamation);
//     return  rep;
//    }
}
