package tn.esprit.devdream.service.interfaces;

import tn.esprit.devdream.entities.Logistiques;
import tn.esprit.devdream.entities.OCTeam;

public interface IOCTeamService {
    public OCTeam addOCTeam(OCTeam e,Long eventId);
    public OCTeam showOCTeam(int e) ;
    public OCTeam updateOCTeam(OCTeam e);
    public OCTeam deleteOCTeam(int e);

}
