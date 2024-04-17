package tn.esprit.devdream.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    private static final Logger logger = LoggerFactory.getLogger(MailService.class);
    private static final int MAX_RETRY_ATTEMPTS = 3;
    private static final long RETRY_DELAY_MS = 5000; // 5 seconds


    public void sendEmail(String destinataire, String sujet, String contenu) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(destinataire);
        message.setSubject(sujet);
        message.setText(contenu);
        javaMailSender.send(message);
    }
    public void sendEmailWithRetry(String destinataire, String sujet, String contenu) {
        int attempt = 0;
        boolean success = false;
        logger.info("Attempting to send email to {} with subject {}", destinataire, sujet);
        while (attempt < MAX_RETRY_ATTEMPTS && !success) {
            try {
                sendEmail(destinataire, sujet, contenu);
                success = true; // Email sent successfully
                logger.info("Email sent successfully to {} after attempt {}", destinataire, attempt + 1);
            } catch (MailSendException e) {
                // Log or handle the exception (optional)
                //System.err.println("Failed to send email. Retrying attempt " + (attempt + 1));
                logger.error("Failed to send email to {}. Retrying attempt {}", destinataire, attempt + 1, e);
                attempt++;
                try {
                    Thread.sleep(RETRY_DELAY_MS); // Wait before retrying
                } catch (InterruptedException ex) {
                    Thread.currentThread().interrupt();
                    logger.error("Failed to send email to {} after {} attempts.", destinataire, MAX_RETRY_ATTEMPTS);
                }
            }
        }
        if (!success) {
            // Log or handle failure after all retry attempts
            // System.err.println("Failed to send email after " + MAX_RETRY_ATTEMPTS + " attempts.");
            logger.error("Failed to send email to {} after {} attempts.", destinataire, MAX_RETRY_ATTEMPTS);
        }
    }


}