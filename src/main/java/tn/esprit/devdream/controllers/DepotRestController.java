package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Depot;
import tn.esprit.devdream.services.IDepotService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/depot")
public class DepotRestController {
    IDepotService depotService;

    @GetMapping("/retrieve-all-depots")
    public List<Depot> getDepots() {
        List<Depot> listDepots = depotService.retrieveAllDepots();
        return listDepots;
    }

    @GetMapping("/retrieve-depot/{depot-id}")
    public Depot retrieveDepot(@PathVariable("depot-id") Long depotId) {
        Depot depot = depotService.retrieveDepot(depotId);
        return depot;
    }

    @PostMapping("/add-depot")
    public Depot addDepot(@RequestBody Depot c) {
        Depot depot = depotService.addDepot(c);
        return depot;
    }

    @DeleteMapping("/remove-depot/{depot-id}")
    public void removeDepot(@PathVariable("depot-id") Long depotId) {
        depotService.removeDepot(depotId);
    }

    @PutMapping("/modify-depot")
    public Depot modifyDepot(@RequestBody Depot c) {
        Depot depot = depotService.modifyDepot(c);
        return depot;
    }
}