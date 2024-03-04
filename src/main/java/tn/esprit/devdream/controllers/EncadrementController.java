package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.services.IEncadrementService;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/encadrement")
public class EncadrementController {
    @Autowired
    private IEncadrementService encadrementService;

    @GetMapping("/encadrant/{etudiantId}")
    public ResponseEntity<User> getEncadrantByEtudiantId(@PathVariable Long etudiantId) {
        User encadrant = encadrementService.getEncadrantByEtudiantId(etudiantId);
        if (encadrant != null) {
            return ResponseEntity.ok(encadrant);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/etudiants/{encadrantId}")
    public ResponseEntity<List<User>> getEtudiantsByEncadrantId(@PathVariable Long encadrantId) {
        List<User> etudiants = encadrementService.getEtudiantsByEncadrantId(encadrantId);
        if (!etudiants.isEmpty()) {
            return ResponseEntity.ok(etudiants);
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }

    @PostMapping("/assigner-encadrant-etudiants")
    public ResponseEntity<String> assignerEncadrantAuxEtudiants(@RequestBody Map<String, Object> requestBody) {
        Long idEncadrant = Long.parseLong(requestBody.get("idEncadrant").toString());
        List<Long> idEtudiants = ((List<Integer>) requestBody.get("idEtudiants")).stream()
                .map(Long::valueOf)
                .collect(Collectors.toList());

        encadrementService.assignerEncadrantAuxEtudiants(idEncadrant, idEtudiants);

        return ResponseEntity.ok("Assignation des encadrants aux étudiants effectuée avec succès.");
    }




    // Endpoint pour récupérer la liste des étudiants encadrés par un encadrant
    @GetMapping("/etudiants-encadres/{encadrantId}")
    public ResponseEntity<List<User>> getEtudiantsEncadres(@PathVariable Long encadrantId) {
        List<User> etudiantsEncadres = encadrementService.getEtudiantsEncadres(encadrantId);
        return ResponseEntity.ok(etudiantsEncadres);
    }
}
