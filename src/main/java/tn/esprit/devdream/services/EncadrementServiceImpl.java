package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.RessourceNotFound.NotFoundException;
import tn.esprit.devdream.entities.Encadrement;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.IEncadrementRepository;
import tn.esprit.devdream.repositories.IUserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class EncadrementServiceImpl implements IEncadrementService {
    @Autowired
    private IEncadrementRepository encadrementRepository;
    @Autowired
    private IUserRepository userRepository;
@Override
    public User getEncadrantByEtudiantId(Long etudiantId) {
        Encadrement encadrement = encadrementRepository.findByEtudiantId(etudiantId);
        if (encadrement != null) {
            return encadrement.getEncadrant();
        }
        return null; // Peut-être lever une exception si nécessaire
    }
    @Override

    public List<User> getEtudiantsByEncadrantId(Long encadrantId) {
        List<Encadrement> encadrements = encadrementRepository.findByEncadrantId(encadrantId);
        // Collecte des étudiants encadrés
        return encadrements.stream()
                .map(Encadrement::getEtudiant)
                .toList();
    }



@Override
    // Méthode pour assigner un encadrant à plusieurs étudiants
    public void assignerEncadrantAuxEtudiants(Long idEncadrant, List<Long> idEtudiants) {
        User encadrant = userRepository.findById(idEncadrant)
                .orElseThrow(() -> new NotFoundException("Encadrant introuvable"));

        for (Long idEtudiant : idEtudiants) {
            User etudiant = userRepository.findById(idEtudiant)
                    .orElseThrow(() -> new NotFoundException("Étudiant introuvable"));

            Encadrement encadrement = new Encadrement();
            encadrement.setEncadrant(encadrant);
            encadrement.setEtudiant(etudiant);
            encadrementRepository.save(encadrement);
        }
    }
@Override
    // Méthode pour récupérer la liste des étudiants encadrés par un encadrant
    public List<User> getEtudiantsEncadres(Long encadrantId) {
        List<Encadrement> encadrements = encadrementRepository.findByEncadrantId(encadrantId);
        List<User> etudiantsEncadres = new ArrayList<>();
        for (Encadrement encadrement : encadrements) {
            etudiantsEncadres.add(encadrement.getEtudiant());
        }
        return etudiantsEncadres;
    }
}
