package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Stage;

import java.util.List;

public interface IStageService {
    public List<Stage> retrieveAllStages();
    public Stage retrieveStage(Long stageId);
    public Stage addStage(Stage stage);
    public void removeStage(Long stageId);
    public Stage modifyStage(Stage stageId);
}
