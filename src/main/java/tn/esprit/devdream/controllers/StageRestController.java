package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Stage;
import tn.esprit.devdream.services.IStageService;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/stage")
public class StageRestController {

    @Autowired
    IStageService stageService;

    @GetMapping("/retrieve-all-stages")
    public List<Stage> getStages() {
        return  stageService.retrieveAllStages();
    }

    @GetMapping("/retrieve-stage/{stage-id}")
    public Stage retrieveStage(@PathVariable("stage-id") Long stageId) {
        return stageService.retrieveStage(stageId);
    }

    @PostMapping("/add-stage")
    public Stage addStage(@RequestBody Stage c) {
        Stage stage = stageService.addStage(c);
        return stage;
    }

    @DeleteMapping("/remove-stage/{stage-id}")
    public void removeStage(@PathVariable("stage-id") Long stageId) {
        stageService.removeStage(stageId);
    }

    @PutMapping("/modify-stage")
    public Stage modifyStage(@RequestBody Stage c) {
        Stage stage = stageService.modifyStage(c);
        return stage;
    }
}