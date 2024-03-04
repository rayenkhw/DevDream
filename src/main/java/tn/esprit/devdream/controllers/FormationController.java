package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Formation;
import tn.esprit.devdream.services.IFormationService;

import java.util.List;

@RestController
@RequestMapping("/formation")
@CrossOrigin("*")
public class FormationController {
    @Autowired
    IFormationService formationService;

    @PostMapping("/addformation")
    public Formation addFormation(@RequestBody Formation f){
        return formationService.addFormation(f) ;
    }
    @DeleteMapping("/remove-formation/{formation-id}")
    public void removeFormation(@PathVariable("formation-id") Long id_formation) {
        formationService.removeFormation(id_formation);
    }
    @PutMapping("/modify-formation/{Id_formation}")
    public Formation modifyFormation(@PathVariable("Id_formation") long id_formation,@RequestBody Formation f) {
        f.setId_formation(id_formation);
        Formation formation = formationService.modifyFormation(f);
        return formation;
    }
    @GetMapping("/retrieve-all-formation")
    public List<Formation> getFormations() {
        List<Formation> listFormations = formationService.retrieveAllFormations();
        return listFormations;
    }
    @GetMapping("/retrieve-formation/{formation-id}")
    public Formation retrieveAllformation(@PathVariable("formation-id") Long id_formation) {
       Formation formation = formationService.retrieveformation(id_formation);
        return formation;
    }
@PostMapping("/{formation-id}/jadore")
    public Formation addJadoreToFormation(@PathVariable long id_formation){

            return  formationService.addJadoreToFormation(id_formation);
        }

    @GetMapping("/search/{mot_cle}")
    public ResponseEntity<List<Formation>> searchFormations(@PathVariable String mot_cle){
        List<Formation> formations =formationService.searchFormations(mot_cle);
        return ResponseEntity.ok().body(formations);
    }
}
