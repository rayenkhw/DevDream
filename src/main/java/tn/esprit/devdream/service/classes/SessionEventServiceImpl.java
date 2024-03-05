package tn.esprit.devdream.service.classes;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Event;
import tn.esprit.devdream.entities.OCTeam;
import tn.esprit.devdream.entities.SessionEvent;
import tn.esprit.devdream.repositories.SessionEventRepository;
import tn.esprit.devdream.service.interfaces.ISessionEventService;

import java.util.Optional;

@Service
@Slf4j
public class SessionEventServiceImpl implements ISessionEventService
{

    @Autowired
    SessionEventRepository sessionEventRep;
    @Override
    public SessionEvent addSessionEvent(SessionEvent e) {
//        if (e.getSessionStarting() != null && e.getSessionEnd() != null && e.getSessionEnd().after(e.getSessionStarting())) {
            sessionEventRep.save(e);
        return e;
    //}
//    else { // If the validation fails, you can throw an exception or handle it in any other appropriate way
//        throw new IllegalArgumentException("Fill the form correctly");
//    }
    }
    @Override
public SessionEvent showSessionEvent(int e) {
    return sessionEventRep.findById(e).orElse(null);
}

    @Override
    public SessionEvent updateSessionEvent(SessionEvent se) {
        // Validate that eventEnd is after eventStart

            // Retrieve the existing event from the database
            SessionEvent existingSessionEvent = sessionEventRep.findById(Math.toIntExact(se.getIdSessionEvent())).orElse(null);

            if (existingSessionEvent != null) {
                // Update the fields of the existing event
                existingSessionEvent.setSessionStarting(se.getSessionStarting());
                existingSessionEvent.setSessionEnd(se.getSessionEnd());
                existingSessionEvent.setSessionName(se.getSessionName());

                // Save the updated event to the database
                return sessionEventRep.save(existingSessionEvent);
            } else {
                // If the event does not exist, you can throw an exception or handle it in any other appropriate way
                throw new IllegalArgumentException("Event not found");
            }

    }

    @Override
    public SessionEvent deleteSessionEvent(int SessionEventId) {
        // Check if the event exists
        try{
            Optional<SessionEvent> optionalEvent = sessionEventRep.findById(SessionEventId);
            // If the event exists, retrieve it
            SessionEvent oCTeamToDelete = optionalEvent.get();
            // Delete the event by its ID
            sessionEventRep.deleteById(SessionEventId);
            // Return the deleted event
            return oCTeamToDelete;
        } catch(Exception e) {
            // If the event does not exist, throw an exception or handle it in any other appropriate way
            throw new IllegalArgumentException("OCTeam not found");
        }
    }
}
