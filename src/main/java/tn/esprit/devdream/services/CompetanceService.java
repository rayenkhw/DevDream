package tn.esprit.devdream.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Competance;
import tn.esprit.devdream.repositories.ICompetanceRepository;

import java.util.List;

@Service
@Slf4j
public class CompetanceService implements ICompetanceService {
    @Autowired
    ICompetanceRepository competanceRepository;
    @Override
    public Competance addCompetance(Competance c) {
        return competanceRepository.save(c);
    }

    @Override
    public void removeCompetance(Long id_competance) {
       competanceRepository.deleteById(id_competance);

    }

    @Override
    public Competance modifyCompetance(Competance id_competance) {
        return competanceRepository.save(id_competance);
    }

    @Override
    public List<Competance> retrieveAllCompetances() {
        log.info("Liste des Competances: {}", competanceRepository.findAll());
        return competanceRepository.findAll();
    }

    @Override
    public Competance retrieveCompetances(Long id_competance) {
        return competanceRepository.findById(id_competance).get();
    }
}
