package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Etiquette;

import java.util.List;

public interface IEtiquetteService {
    public List<Etiquette> retrieveAllEtiquettes();
    public Etiquette retrieveEtiquette(Long etiquetteId);
    public Etiquette addEtiquette(Etiquette etiquette);
    public void removeEtiquette(Long etiquetteId);
    public Etiquette modifyEtiquette(Etiquette etiquette);
}
