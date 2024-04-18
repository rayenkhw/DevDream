package tn.esprit.devdream.services;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Depot;
import tn.esprit.devdream.repositories.DepotRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DepotServiceImpl  implements IDepotService {
    @Autowired
    DepotRepository depotRepository;
    @Override
    public List<Depot> retrieveAllDepots() {
        return depotRepository.findAll();
    }

    @Override
    public Depot retrieveDepot(Long id) {
        return depotRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Depot not found with id: " + id));
    }

    @Override
    public Depot addDepot(Depot c) {
        return depotRepository.save(c);
    }

    @Override
    public void removeDepot(Long id) {
        depotRepository.deleteById(id);
    }

    @Override
    public Depot modifyDepot(Depot depot) {
        Optional<Depot> existingDepot = depotRepository.findById(depot.getId_depot());
        if (existingDepot.isPresent()) {
            return depotRepository.save(depot);
        } else {
            throw new EntityNotFoundException("Depot not found with id: " + depot.getId_depot());
        }
    }
}