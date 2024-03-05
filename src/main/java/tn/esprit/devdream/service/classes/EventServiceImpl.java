package tn.esprit.devdream.service.classes;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Event;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.EventRepository;
import tn.esprit.devdream.repositories.UserRepository;
import tn.esprit.devdream.service.interfaces.IEventService;

import java.util.*;

@Service
@Slf4j
public class EventServiceImpl implements IEventService {

    @Autowired
    UserRepository userRep;

    @Autowired
    EventRepository eventRep;
    @Override
    public Event addEvent(Event e) {
        if (e.getEventStart() != null && e.getEventEnd() != null && e.getEventEnd().after(e.getEventStart())) {
        eventRep.save(e);
        return e;}
        else { // If the validation fails, you can throw an exception or handle it in any other appropriate way
            throw new IllegalArgumentException("Fill the form correctly");
        }
    }
    @Autowired
    public void EventService(EventRepository eventRepository) {
        this.eventRep = eventRepository;
    }

    @Override
    public Event showEvent(Long eventId) {
        Optional<Event> optionalEvent = eventRep.showEventDetails(eventId);
        return optionalEvent.orElse(null);
    }

    @Override
    public List<Event> allEvents() {
        return (List<Event>) eventRep.findAll();
    }
    @Override
    public Event updateEvent(Event e) {
        // Validate that eventEnd is after eventStart
        if ((e.getEventEnd() == null || e.getEventStart() == null || e.getEventEnd().after(e.getEventStart())))
        {
            // Retrieve the existing event from the database
            Event existingEvent = eventRep.findById(Math.toIntExact(e.getId_event())).orElse(null);

            if (existingEvent != null) {
                // Update the fields of the existing event
                existingEvent.setEventName(e.getEventName());
                existingEvent.setDescription(e.getDescription());
                existingEvent.setEventStart(e.getEventStart());
                existingEvent.setEventEnd(e.getEventEnd());
                existingEvent.setBudget(e.getBudget());
                existingEvent.setPoster(e.getPoster());

                // Save the updated event to the database
                return eventRep.save(existingEvent);
            } else {
                // If the event does not exist, you can throw an exception or handle it in any other appropriate way
                throw new IllegalArgumentException("Event not found");
            }
        } else {
            // If the validation fails, you can throw an exception or handle it in any other appropriate way
            throw new IllegalArgumentException("eventEnd must be after eventStart");
        }
    }
    @Override
    public Event deleteEvent(int eventId) {
        // Check if the event exists
        try{
            Optional<Event> optionalEvent = eventRep.findById(eventId);
            // If the event exists, retrieve it
            Event eventToDelete = optionalEvent.get();
            // Delete the event by its ID
            eventRep.deleteById(eventId);
            // Return the deleted event
            return eventToDelete;
        } catch(Exception e) {
            // If the event does not exist, throw an exception or handle it in any other appropriate way
            throw new IllegalArgumentException("Event not found");
        }
    }

        @Override
        public Event addUserToEvent(int idEvent, int idUser) {
            User u = userRep.findById(idUser).orElseThrow(() -> new IllegalArgumentException("User not found with id: " + idUser));
            Event savedEvent = eventRep.findById(idEvent).orElseThrow(() -> new IllegalArgumentException("Event not found with id: " + idEvent));

            if (savedEvent.getParticipantslist() == null) {
                savedEvent.setParticipantslist(new ArrayList<>());
            }

            savedEvent.getParticipantslist().add(u);
            eventRep.save(savedEvent);
            return savedEvent;
        }

        @Override
        public Event participate (Event e){
            Event existingEvent = eventRep.findById(Math.toIntExact(e.getId_event())).orElse(null);
            assert existingEvent != null;
            existingEvent.setNbrParticipant(e.getNbrParticipant()+1);
            // Save the updated event to the database
            return eventRep.save(existingEvent);
        };

//    public Event addParticipant(Long eventId, User participant) {
//        Event event = eventRep.findById(eventId.intValue())
//                .orElseThrow(() -> new EventNotFoundException("Event not found"));
//
//        // Add the participant to the event
//        List<User> participantsList = event.getParticipantslist();
//        participantsList.add(participant);
//        event.setParticipantslist(participantsList);
//
//        // Save and return the updated event
//        return eventRep.save(event);
//    }

}
