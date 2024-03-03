package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Stage;

import java.util.List;

public interface IStageService {
    public List<Stage> retrieveAllStages();
    public Stage retrieveStage(Long id);
    public Stage addStage(Stage c);
    public void removeStage(Long id);
    public Stage modifyStage(Stage Stage);
}