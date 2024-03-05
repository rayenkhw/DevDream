package tn.esprit.devdream.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Pointage;
import tn.esprit.devdream.repositories.IPointageRepository;

import java.util.List;

@Service
@Slf4j
public class PointageService implements IPointageService {
    @Autowired
    IPointageRepository pointageRepository;

    @Override
    public Pointage addPointage(Pointage p) {
        return pointageRepository.save(p);
    }

    @Override
    public void removePointage(Long id_pointage) {
        pointageRepository.deleteById(id_pointage);
    }

    @Override
    public Pointage modifyPointage(Pointage id_pointage) {
        return pointageRepository.save(id_pointage);
    }

    @Override
    public List<Pointage> retrieveAllPointages() {
        log.info("Liste des Pointages: {}", pointageRepository.findAll());
        return pointageRepository.findAll();
    }

    @Override
    public Pointage retrievePointage(Long id_pointage) {
        return pointageRepository.findById(id_pointage).get();
    }

    @Override
    public Pointage enregistrerPointage(Pointage pointage) {
        return pointageRepository.save(pointage);
    }

    @Override
    public List<Pointage> obtenirTousLesPointages() {
        return pointageRepository.findAll();
    }
}
