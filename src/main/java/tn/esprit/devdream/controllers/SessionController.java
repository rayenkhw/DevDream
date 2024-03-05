package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.SessionEvent;
import tn.esprit.devdream.service.interfaces.ISessionEventService;

@RestController
@RequestMapping("/SessionEvent")
public class SessionController {
    @Autowired
    ISessionEventService sessionService;

    @PostMapping("/add")
    public ResponseEntity<SessionEvent> addSessionEvent(@RequestBody SessionEvent sessionId) {
        SessionEvent addedSessionEvent = sessionService.addSessionEvent(sessionId);
        return new ResponseEntity<>(addedSessionEvent, HttpStatus.CREATED);
    }

    @GetMapping("/{sessionId}")
    public ResponseEntity<SessionEvent> showSessionEvent(@PathVariable int sessionId) {
        SessionEvent oCTeam = sessionService.showSessionEvent(sessionId);
        if (oCTeam != null) {
            return ResponseEntity.ok(oCTeam);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{sessionId}")
    public ResponseEntity<SessionEvent> updateSessionEvent(@PathVariable int sessionId, @RequestBody SessionEvent updatedSessionEvent) {
        SessionEvent sessionEventToUpdate = sessionService.showSessionEvent(sessionId);
        if (sessionEventToUpdate != null) {
            updatedSessionEvent.setIdSessionEvent(sessionId); // Ensure the ID in the updated session matches the provided ID
            SessionEvent updatedSessionEventResult = sessionService.updateSessionEvent(sessionEventToUpdate);
            return ResponseEntity.ok(updatedSessionEventResult);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{sessionId}")
    public ResponseEntity<Void> deleteSessionEvent(@PathVariable Long sessionId) {
        try {
            SessionEvent deletedSessionEvent = sessionService.deleteSessionEvent(sessionId.intValue());
            // Create the response message
            String message = "OC Team with ID " + sessionId + " deleted successfully.";
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

}
