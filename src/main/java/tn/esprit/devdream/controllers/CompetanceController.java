package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Competance;
import tn.esprit.devdream.services.ICompetanceService;

import java.util.List;

@RestController
@RequestMapping("/competance")
@CrossOrigin("*")
public class CompetanceController {
    @Autowired
    ICompetanceService competanceService;
    @PostMapping("/addcompetance")
    public Competance addCompetance(@RequestBody Competance c){
        return competanceService.addCompetance(c) ;
    }
    @DeleteMapping("/remove-competance/{competance-id}")
    public void removeCompetance(@PathVariable("competance-id") Long id_competance) {
        competanceService.removeCompetance(id_competance);
    }
    @PutMapping("/modify-competance/{Id_competance}")
    public Competance modifyCompetance(@PathVariable("Id_competance") long id_competance,@RequestBody Competance c) {
        c.setId_competance(id_competance);
        Competance competance = competanceService.modifyCompetance(c);
        return competance;
    }
    @GetMapping("/retrieve-all-competances")
    public List<Competance> getCopetances() {
        List<Competance> listCompetances = competanceService.retrieveAllCompetances();
        return listCompetances;
    }
    @GetMapping("/retrieve-competance/{competance-id}")
    public Competance retrieveAllCompetances(@PathVariable("competance-id") Long id_competance) {
       Competance competance = competanceService.retrieveCompetances(id_competance);
        return competance;
    }


}
