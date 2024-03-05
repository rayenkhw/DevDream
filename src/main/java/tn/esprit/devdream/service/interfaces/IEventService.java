package tn.esprit.devdream.service.interfaces;

import tn.esprit.devdream.entities.Event;
import tn.esprit.devdream.entities.User;

import java.util.List;
import java.util.Set;

public interface IEventService {
    public Event addEvent(Event e);
    public Event showEvent(Long e) ;
    public List<Event> allEvents();
    public Event updateEvent(Event e);
    public Event deleteEvent(int e);
    public Event addUserToEvent(int e, int idUser);
    public Event  participate (Event e);

//    public Event addParticipant(Long eventId, User participant);
}
