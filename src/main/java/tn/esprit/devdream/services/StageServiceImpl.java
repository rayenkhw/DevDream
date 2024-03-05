package tn.esprit.devdream.services;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Stage;
import tn.esprit.devdream.repositories.StageRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class StageServiceImpl  implements IStageService {
    @Autowired
    StageRepository stageRepository;
    @Override
    public List<Stage> retrieveAllStages() {
        return stageRepository.findAll();
    }

    @Override
    public Stage retrieveStage(Long id) {
        return stageRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Stage not found with id: " + id));
    }

    @Override
    public Stage addStage(Stage c) {
        return stageRepository.save(c);
    }

    @Override
    public void removeStage(Long id) {
        stageRepository.deleteById(id);
    }

    @Override
    public Stage modifyStage(Stage stage) {
        Optional<Stage> existingStage = stageRepository.findById(stage.getId_stage());
        if (existingStage.isPresent()) {
            return stageRepository.save(stage);
        } else {
            throw new EntityNotFoundException("Stage not found with id: " + stage.getId_stage());
        }
    }
}