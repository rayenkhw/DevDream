package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Pointage;

import java.util.List;

public interface IPointageService {
    Pointage addPointage(Pointage p);

    void removePointage(Long idPointage);

    Pointage modifyPointage(Pointage p);

    List<Pointage> retrieveAllPointages();

    Pointage retrievePointage(Long idPointage);

    Pointage enregistrerPointage(Pointage pointage);

    List<Pointage> obtenirTousLesPointages();
}
