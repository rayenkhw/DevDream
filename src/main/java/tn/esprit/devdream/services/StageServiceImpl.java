package tn.esprit.devdream.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Stage;
import tn.esprit.devdream.repositories.IStageRepository;

import java.util.List;

@Service
public class StageServiceImpl implements IStageService
{
@Autowired
IStageRepository iStageRepository;

    @Override
    public List<Stage> retrieveAllStages() {
        return iStageRepository.findAll();
    }

    @Override
    public Stage retrieveStage(Long stageId) {
        return iStageRepository.findById(stageId).get();
    }

    @Override
    public Stage addStage(Stage stage) {
        return iStageRepository.save(stage);
    }

    @Override
    public void removeStage(Long stageId) {
        iStageRepository.deleteById(stageId);
    }

    @Override
    public Stage modifyStage(Stage stageId) {
        return iStageRepository.save(stageId);
    }
}
