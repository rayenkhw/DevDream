package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Formation;
import tn.esprit.devdream.entities.Offre;
import tn.esprit.devdream.services.IFormationService;

import java.util.List;
import java.util.Map;
@AllArgsConstructor
@RestController
@RequestMapping("/formation")
@CrossOrigin("*")
public class FormationController {
    @Autowired
    IFormationService formationService;

    @PostMapping("/addformation")
    public Formation addFormation(@RequestBody Formation f){
        Formation formation = formationService.addFormation(f);
        return formation;
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
   @PostMapping("/{formation-id}/like")
    public ResponseEntity<Formation> likeFormation(@PathVariable("formation-id") long id_formation){
            Formation formation = formationService.likeFormation(id_formation);
            return  ResponseEntity.ok().body(formation);
        }

    @GetMapping("/search/{mot_cle}")
    public ResponseEntity<List<Formation>> searchFormations(@PathVariable String mot_cle){
        List<Formation> formations =formationService.searchFormations(mot_cle);
        return ResponseEntity.ok().body(formations);
    }
    @GetMapping("/statsformation")
    public ResponseEntity<Map<String, Long>> getStatisticsformation() {
        Map<String, Long> statistics =formationService.getStatisticsformation();
        return ResponseEntity.ok(statistics);
    }
}
