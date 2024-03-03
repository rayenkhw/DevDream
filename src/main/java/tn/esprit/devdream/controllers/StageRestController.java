package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Stage;
import tn.esprit.devdream.services.IStageService;

import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("/stage")
public class StageRestController {
    IStageService stageService;

    @GetMapping("/retrieve-all-stages")
    public List<Stage> getStages() {
        List<Stage> listStages = stageService.retrieveAllStages();
        return listStages;
    }

    @GetMapping("/retrieve-stage/{stage-id}")
    public Stage retrieveStage(@PathVariable("stage-id") Long stageId) {
        Stage stage = stageService.retrieveStage(stageId);
        return stage;
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