package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Depot;

import java.util.List;

public interface IDepotService {
    public List<Depot> retrieveAllDepots();
    public Depot retrieveDepot(Long id);
    public Depot addDepot(Depot c);
    public void removeDepot(Long id);
    public Depot modifyDepot(Depot Depot);
}