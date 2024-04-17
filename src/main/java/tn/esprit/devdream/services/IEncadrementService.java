package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.User;

import java.util.List;

public interface IEncadrementService {
    public User getEncadrantByEtudiantId(Long etudiantId);
    public List<User> getEtudiantsByEncadrantId(Long encadrantId);
    public void assignerEncadrantAuxEtudiants(Long idEncadrant, List<Long> idEtudiants);
    public List<User> getEtudiantsEncadres(Long encadrantId);
}
