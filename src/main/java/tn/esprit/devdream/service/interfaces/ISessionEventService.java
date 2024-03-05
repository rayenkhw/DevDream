package tn.esprit.devdream.service.interfaces;

import tn.esprit.devdream.entities.OCTeam;
import tn.esprit.devdream.entities.SessionEvent;

public interface ISessionEventService {
    public SessionEvent addSessionEvent(SessionEvent s);
    public SessionEvent showSessionEvent(int e) ;
    public SessionEvent updateSessionEvent(SessionEvent e);
    public SessionEvent deleteSessionEvent(int e);

}
