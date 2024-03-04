package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Stage;
import tn.esprit.devdream.services.IStageService;

import java.util.List;

@RestController
@RequestMapping("/stage")
@CrossOrigin(origins = "*")
public class StageController {
    @Autowired
    IStageService iStageService;

    @PostMapping("/addstage")
    public Stage addStage(@RequestBody Stage stage ){
        return iStageService.addStage(stage);
    }

    @GetMapping("/retrieve-all-Stages")
    public List<Stage> getStages() {
        List<Stage> listStages = iStageService.retrieveAllStages();
        return listStages;
    }
    @GetMapping("/retrieve-stage/{stage-id}")
    public Stage retrieveStage(@PathVariable("stage-id") Long stageId) {
        Stage stage  = iStageService.retrieveStage(stageId);
        return stage;
    }
    @DeleteMapping("/remove-stage/{stage-id}")
    public void removeStage(@PathVariable("stage-id") Long stageId) {
        iStageService.removeStage(stageId);
    }
    @PutMapping("/modify-stage/{stage-id}")
    public Stage modifyStage(@PathVariable("stage-id") Long stageId,@RequestBody Stage c) {
        c.setId_stage(stageId);
        Stage stage = iStageService.modifyStage(c);
        return stage;
    }
}
