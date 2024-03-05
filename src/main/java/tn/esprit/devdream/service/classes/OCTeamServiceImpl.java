package tn.esprit.devdream.service.classes;

import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Event;
import tn.esprit.devdream.entities.OCTeam;
import tn.esprit.devdream.repositories.EventRepository;
import tn.esprit.devdream.repositories.OCTeamRepository;
import tn.esprit.devdream.service.interfaces.IOCTeamService;

import java.util.Optional;

@Service
@Slf4j
public class OCTeamServiceImpl implements IOCTeamService {
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    OCTeamRepository oCTeamRep;
    @Override
    public OCTeam addOCTeam(OCTeam o,Long eventId) {
        Optional<Event> optionalEvent = eventRepository.findById(eventId.intValue());
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            // Set the Event for the Logistiques entity
            o.setEvent(event);
            // Save the Logistiques entity
            oCTeamRep.save(o);
            return o;
        } else {
            throw new EntityNotFoundException("Event not found with id: " + eventId);
        }
    }

    @Override
    public OCTeam showOCTeam(int e) {
        return oCTeamRep.findById(e).orElse(null);
    }

    @Override
    public OCTeam updateOCTeam(OCTeam e) {
        // Validate that eventEnd is after eventStart

        // Retrieve the existing event from the database
        OCTeam existingOCTeam = oCTeamRep.findById(Math.toIntExact(e.getId_OC())).orElse(null);

        if (existingOCTeam != null) {
            // Update the fields of the existing OCTeam
            existingOCTeam.setOCnames(e.getOCnames());
            existingOCTeam.setOCRole(e.getOCRole());

            // Save the updated OCTeam to the database
            return oCTeamRep.save(existingOCTeam);
        } else {
            // If the event does not exist, you can throw an exception or handle it in any other appropriate way
            throw new IllegalArgumentException("OCTeam not found");
        }
    }

    @Override
    public OCTeam deleteOCTeam(int oCTeamId) {
        // Check if the event exists
        try{
            Optional<OCTeam> optionalEvent = oCTeamRep.findById(oCTeamId);
            // If the event exists, retrieve it
            OCTeam oCTeamToDelete = optionalEvent.get();
            // Delete the event by its ID
            oCTeamRep.deleteById(oCTeamId);
            // Return the deleted event
            return oCTeamToDelete;
        } catch(Exception e) {
            // If the event does not exist, throw an exception or handle it in any other appropriate way
            throw new IllegalArgumentException("OCTeam not found");
        }
    }
}

