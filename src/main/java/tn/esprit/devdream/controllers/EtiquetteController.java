package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Etiquette;
import tn.esprit.devdream.services.IEtiquetteService;

import java.util.List;

@RestController
@RequestMapping("/etiquette")
@CrossOrigin(origins = "*")
public class EtiquetteController {
    @Autowired
    IEtiquetteService iEtiquetteService;

    @PostMapping("/addetiquette")
    public Etiquette addEtiquette(@RequestBody Etiquette etiquette){
        return iEtiquetteService.addEtiquette(etiquette) ;
    }

    @GetMapping("/retrieve-all-etiquettes")
    public List<Etiquette> getEtiquettes() {
        List<Etiquette> listEtiquettes = iEtiquetteService.retrieveAllEtiquettes();
        return listEtiquettes;
    }
    @GetMapping("/retrieve-etiquette/{etiquette-id}")
    public Etiquette retrieveEtiquette(@PathVariable("etiquette-id") Long etiquetteId) {
        Etiquette etiquette  = iEtiquetteService.retrieveEtiquette(etiquetteId);
        return etiquette;
    }
    @DeleteMapping("/remove-etiquette/{etiquette-id}")
    public void removeEtiquette(@PathVariable("etiquette-id") Long etiquetteId) {
        iEtiquetteService.removeEtiquette(etiquetteId);
    }
    @PutMapping("/modify-etiquette/{etiquette-id}")
    public Etiquette modifyCommentaire(@PathVariable("etiquette-id") Long etiquetteId,@RequestBody Etiquette c) {
        c.setId_etiquette(etiquetteId);
        Etiquette etiquette = iEtiquetteService.modifyEtiquette(c);
        return etiquette;
    }
}
