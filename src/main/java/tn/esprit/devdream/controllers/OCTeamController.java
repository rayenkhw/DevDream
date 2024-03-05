package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.OCTeam;
import tn.esprit.devdream.service.interfaces.IOCTeamService;

@RestController
@RequestMapping("/OCTeam")
public class OCTeamController {
    @Autowired
    IOCTeamService oCTeamService;

    @PostMapping("/add")
    public ResponseEntity<OCTeam> addOCTeam(@RequestBody OCTeam oCTeam, @RequestParam Long eventId) {
        OCTeam addedOCTeam = oCTeamService.addOCTeam(oCTeam,eventId);
        return new ResponseEntity<>(addedOCTeam, HttpStatus.CREATED);
    }

    @GetMapping("/{OCId}")
    public ResponseEntity<OCTeam> showOCTeam(@PathVariable int OCId) {
        OCTeam oCTeam = oCTeamService.showOCTeam(OCId);
        if (oCTeam != null) {
            return ResponseEntity.ok(oCTeam);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{OCId}")
    public ResponseEntity<OCTeam> updateOCTeam(@PathVariable int OCId, @RequestBody OCTeam updatedOCTeam) {
        OCTeam logistiquesToUpdate = oCTeamService.showOCTeam(OCId);
        if (logistiquesToUpdate != null) {
            updatedOCTeam.setId_OC(OCId); // Ensure the ID in the updated OCTeam matches the provided ID
            OCTeam updatedOCTeamResult = oCTeamService.updateOCTeam(updatedOCTeam);
            return ResponseEntity.ok(updatedOCTeamResult);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{OCId}")
    public ResponseEntity<Void> deleteLogistiques(@PathVariable Long OCId) {
        try {
            OCTeam deletedOCTeam = oCTeamService.deleteOCTeam(OCId.intValue());
            // Create the response message
            String message = "OC Team with ID " + OCId + " deleted successfully.";
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
