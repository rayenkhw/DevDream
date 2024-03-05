package tn.esprit.devdream.service.classes;

import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Event;
import tn.esprit.devdream.entities.Logistiques;
import tn.esprit.devdream.repositories.EventRepository;
import tn.esprit.devdream.repositories.LogistiquesRepository;
import tn.esprit.devdream.service.interfaces.ILogistiquesService;

import java.util.Optional;

@Service
@Slf4j
public class LogistiquesServiceImpl implements ILogistiquesService {
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    LogistiquesRepository logistiquesRep;
    @Override
    public Logistiques addLogistiques(Logistiques l, Long eventId) {
        // Retrieve the Event from the database
        Optional<Event> optionalEvent = eventRepository.findById(eventId.intValue());
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            // Set the Event for the Logistiques entity
            l.setEvent(event);
            // Save the Logistiques entity
            logistiquesRep.save(l);
            return l;
        } else {
            throw new EntityNotFoundException("Event not found with id: " + eventId);
        }
    }

    @Override
    public Logistiques showLogistiques(int e) {
        return logistiquesRep.findById(e).orElse(null);
    }

    @Override
    public Logistiques updateLogistiques(Logistiques e) {

            // Retrieve the existing logistics from the database
            Logistiques existingLogistiques = logistiquesRep.findById(Math.toIntExact(e.getId_logistics())).orElse(null);

            if (existingLogistiques != null) {
                // Update the fields of the existing logistics
                existingLogistiques.setAccessory(e.getAccessory());
                existingLogistiques.setChair(e.getChair());
                existingLogistiques.setClassNb(e.getClassNb());
                existingLogistiques.setTableCount(e.getTableCount());
                // Save the updated logistics to the database
                return logistiquesRep.save(existingLogistiques);
            } else {
                // If the logistics does not exist, you can throw an exception or handle it in any other appropriate way
                throw new IllegalArgumentException("Logistics not found");
            }
    }

    @Override
    public Logistiques deleteLogistiques(int logisticsId) {
        // Check if the event exists
        try{
            Optional<Logistiques> optionalEvent = logistiquesRep.findById(logisticsId);
            // If the event exists, retrieve it
            Logistiques logistiquesToDelete = optionalEvent.get();
            // Delete the event by its ID
            logistiquesRep.deleteById(logisticsId);
            // Return the deleted event
            return logistiquesToDelete;
        } catch(Exception e) {
            // If the event does not exist, throw an exception or handle it in any other appropriate way
            throw new IllegalArgumentException("Logistics not found");
        }
    }
}
