package tn.esprit.devdream.controllers;

<<<<<<< HEAD
import org.springframework.beans.factory.annotation.Autowired;
=======
import lombok.AllArgsConstructor;
>>>>>>> origin/ranimback
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Stage;
import tn.esprit.devdream.services.IStageService;

import java.util.List;


@RestController
<<<<<<< HEAD
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/stage")
public class StageRestController {

    @Autowired
=======
@AllArgsConstructor
@RequestMapping("/stage")
public class StageRestController {
>>>>>>> origin/ranimback
    IStageService stageService;

    @GetMapping("/retrieve-all-stages")
    public List<Stage> getStages() {
<<<<<<< HEAD
        return  stageService.retrieveAllStages();
=======
        List<Stage> listStages = stageService.retrieveAllStages();
        return listStages;
>>>>>>> origin/ranimback
    }

    @GetMapping("/retrieve-stage/{stage-id}")
    public Stage retrieveStage(@PathVariable("stage-id") Long stageId) {
<<<<<<< HEAD
        return stageService.retrieveStage(stageId);
=======
        Stage stage = stageService.retrieveStage(stageId);
        return stage;
>>>>>>> origin/ranimback
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