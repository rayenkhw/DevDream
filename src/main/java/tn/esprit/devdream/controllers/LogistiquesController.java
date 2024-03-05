package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Logistiques;
import tn.esprit.devdream.service.interfaces.ILogistiquesService;

import java.util.List;

@RestController
@RequestMapping("/Logistics")
public class LogistiquesController {
    @Autowired
    ILogistiquesService logistiquesService;

    @PostMapping("/add")
    public ResponseEntity<Logistiques> addLogistiques(@RequestBody Logistiques logistiques,
                                                      @RequestParam Long eventId) {
        Logistiques savedLogistiques = logistiquesService.addLogistiques(logistiques, eventId);
        return new ResponseEntity<>(savedLogistiques, HttpStatus.CREATED);
    }

    @GetMapping("/{logistiquesId}")
    public ResponseEntity<Logistiques> showLogistiques(@PathVariable int logistiquesId) {
        Logistiques logistiques = logistiquesService.showLogistiques(logistiquesId);
        if (logistiques != null) {
            return ResponseEntity.ok(logistiques);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{logistiquesId}")
    public ResponseEntity<Logistiques> updateLogistiques(@PathVariable Long logistiquesId, @RequestBody Logistiques updatedLogistiques) {
        Logistiques logistiquesToUpdate = logistiquesService.showLogistiques(logistiquesId.intValue());
        if (logistiquesToUpdate != null) {
            updatedLogistiques.setId_logistics(logistiquesId); // Ensure the ID in the updated logistiques matches the provided ID
            Logistiques updatedLogistiquesResult = logistiquesService.updateLogistiques(updatedLogistiques);
            return ResponseEntity.ok(updatedLogistiquesResult);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{logistiquesId}")
    public ResponseEntity<Void> deleteLogistiques(@PathVariable Long logistiquesId) {
        try {
            Logistiques deletedLogistiques = logistiquesService.deleteLogistiques(logistiquesId.intValue());
            // Create the response message
            String message = "Logistiques with ID " + logistiquesId + " deleted successfully.";
            // Create the response headers
            HttpHeaders headers = new HttpHeaders();
            headers.add("Message", message);
            // Return the response entity with the response object and status OK
            return new ResponseEntity<>(headers, HttpStatus.OK);
        }

        catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

}
