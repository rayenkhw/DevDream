package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Competance;

import java.util.List;

public interface ICompetanceService {
    Competance addCompetance(Competance c);

    void removeCompetance(Long id_competance);

    Competance modifyCompetance(Competance c);

    List<Competance> retrieveAllCompetances();

    Competance retrieveCompetances(Long id_competance);
}
