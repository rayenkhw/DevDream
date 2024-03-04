package tn.esprit.devdream.services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Tache;
import tn.esprit.devdream.entities.User;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendNewTaskNotification(User student, Tache newTask) {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        try {
            helper.setTo(student.getEmail());
            helper.setSubject("Nouvelle tâche assignée");
            helper.setText("Bonjour " + student.getPrenom() + ",\n\nUne nouvelle tâche vous a été assignée : " + newTask.getDescription() + "\n\nCordialement,\nVotre encadrant");
            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
            // Gérer l'exception ici si nécessaire
        }
    }
}