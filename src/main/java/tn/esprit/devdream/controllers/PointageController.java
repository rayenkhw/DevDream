package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Pointage;
import tn.esprit.devdream.services.IPointageService;

import java.util.List;

@RestController
@RequestMapping("/pointage")
@CrossOrigin("*")
public class PointageController {
    @Autowired
    IPointageService pointageService;
    @PostMapping("/addpointage")
    public Pointage addPointage(@RequestBody Pointage p){
        return pointageService.addPointage(p) ;
    }
    @DeleteMapping("/remove-pointage/{pointage-id}")
    public void removePointage(@PathVariable("pointage-id") Long id_pointage) {
        pointageService.removePointage(id_pointage);
    }
    @PutMapping("/modify-pointage/{pointage-id}")
    public Pointage modifyPointage( @PathVariable ("pointage-id") Long id_pointage, @RequestBody Pointage p) {
        p.setId_pointage(id_pointage);
        Pointage pointage = pointageService.modifyPointage(p);
        return pointage;
    }

    @GetMapping("/retrieve-all-pointages")
    public List<Pointage> getPointages() {
        List<Pointage> listPointages = pointageService.retrieveAllPointages();
        return listPointages;
    }
    @GetMapping("/retrieve-pointage/{pointage-id}")
    public Pointage retrievePointage(@PathVariable("pointage-id") Long id_pointage) {
        Pointage pointage = pointageService.retrievePointage(id_pointage);
        return pointage;
    }
    @PostMapping("/pointage-enregistrer")
    public ResponseEntity<Pointage> enregistrerPointage(@RequestBody Pointage pointage) {
        Pointage nouveauPointage = pointageService.enregistrerPointage(pointage);
        return ResponseEntity.ok(nouveauPointage);
    }
    @GetMapping("/tous-pointage")
    public ResponseEntity<List<Pointage>> obtenirTousLesPointages() {
        List<Pointage> tousLesPointages = pointageService.obtenirTousLesPointages();
        return ResponseEntity.ok(tousLesPointages);
    }
}
