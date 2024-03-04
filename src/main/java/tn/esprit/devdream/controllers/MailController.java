package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.devdream.services.MailService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/mail")
public class MailController {
    @Autowired
    private MailService emailService;

   /* @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@RequestBody EmailData emailData) {
        emailService.sendNewTaskNotification(emailData.getRecipient(), emailData.getTask());
        return ResponseEntity.ok("Email sent successfully.");
    }

    static class EmailData {
        private String recipient;
        private Tache task;

        // Getters et setters

        public String getRecipient() {
            return recipient;
        }

        public void setRecipient(String recipient) {
            this.recipient = recipient;
        }

        public Tache getTask() {
            return task;
        }

        public void setTask(Tache task) {
            this.task = task;
        }
    }*/
}