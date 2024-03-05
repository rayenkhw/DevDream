package tn.esprit.devdream.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Event;
import tn.esprit.devdream.service.interfaces.IEventService;

import java.util.List;

@RestController
@RequestMapping("/Event")
@CrossOrigin(origins = "http://localhost:4200")
public class EventController {
    @Autowired
    IEventService eventService;


    @PostMapping("/add")
    public ResponseEntity<Event> addEvent(@RequestBody Event event) {   
        Event addedEvent = eventService.addEvent(event);
        System.out.println("hhhhh");
        return new ResponseEntity<>(addedEvent, HttpStatus.CREATED);
    }
    @GetMapping("/{eventId}")
    public ResponseEntity<Event> showEvent(@PathVariable("eventId") Long eventId) {
        Event event = eventService.showEvent(eventId);
        System.out.println("aaaaaahello");
        System.out.println(event);

        if (event != null) {
            return ResponseEntity.ok(event);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/all")
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventService.allEvents();
        return ResponseEntity.ok(events);
    }

    @PutMapping("/update/{eventId}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long eventId, @RequestBody Event updatedEvent) {
        Event eventToUpdate = eventService.showEvent(eventId);
        if (eventToUpdate != null) {
            updatedEvent.setId_event(eventId); // Ensure the ID in the updated event matches the provided ID
            Event updatedEventResult = eventService.updateEvent(updatedEvent);
            return ResponseEntity.ok(updatedEventResult);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{eventId}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long eventId) {
        try {
            Event deletedEvent = eventService.deleteEvent(eventId.intValue());
            // Create the response message
            String message = "Event with ID " + eventId + " deleted successfully.";
            // Create the response headers
            HttpHeaders headers = new HttpHeaders();
            headers.add("Message", message);
            // Return the response entity with the response object and status OK
            return new ResponseEntity<>(headers, HttpStatus.OK);
        }

        catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/participateEvent/{eventId}/{idUser}")
    public String addAffectEventUser(@PathVariable("eventId") int idEvent, @PathVariable("idUser") int idUser) {
        try {
            Event e = eventService.addUserToEvent(idEvent, idUser);
            String message = "User participated successfully";
            // Create the response headers
            HttpHeaders headers = new HttpHeaders();
            headers.add("Message", message);
            // Return the response entity with the response object and status OK
            //return ResponseEntity.ok(e);
            return ("ok");
        } catch (Exception e) {
            return("not ok");
        }
    }
    @PutMapping("/participate/{eventId}")
    public ResponseEntity<Event> participate(@PathVariable Long eventId){
        Event eventToParticipate = eventService.showEvent(eventId);

        eventToParticipate.setId_event(eventId); // Ensure the ID in the participate event matches the provided ID
            Event updatedEventResult = eventService.participate(eventToParticipate);
            return ResponseEntity.ok(updatedEventResult);
    }
}

