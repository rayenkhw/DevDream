package tn.esprit.devdream.service.interfaces;

import tn.esprit.devdream.entities.Event;
import tn.esprit.devdream.entities.Logistiques;

import java.util.List;

public interface ILogistiquesService {
    public Logistiques addLogistiques(Logistiques l, Long eventId);
    public Logistiques showLogistiques(int e) ;
    public Logistiques updateLogistiques(Logistiques e);
    public Logistiques deleteLogistiques(int e);


}
