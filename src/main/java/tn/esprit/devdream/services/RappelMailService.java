package tn.esprit.devdream.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Tache;
import tn.esprit.devdream.repositories.ITacheRepository;

import java.time.LocalDate;
import java.util.List;

@Service
@Slf4j
public class RappelMailService {

    @Autowired
    private ITacheRepository tacheRepository;

    @Autowired
    private MailService mailService;

    @Scheduled(cron = "0 0 8 * * ?") // Exécuter tous les jours à 8h00
    public void envoyerRappelMail() {
        // Récupérer la date actuelle
        LocalDate today = LocalDate.now();

        // Calculer la date limite (par exemple, dans les 24 heures suivantes)
        LocalDate limite = today.plusDays(1);

        // Récupérer les tâches dont la date de délai est dans les 24 heures suivantes
        List<Tache> taches = tacheRepository.findByDelaiBefore(limite.toString());

        // Envoyer un e-mail de rappel pour chaque tâche trouvée
        for (Tache tache : taches) {
            String destinataire = tache.getEncadrant().getEmail(); // ou tache.getEtudiant().getEmail() selon le destinataire
            String sujet = "Rappel : Tâche à compléter";
            String contenu = "Vous avez une tâche à compléter avant la date limite : " + tache.getDelai();
            mailService.sendEmail(destinataire, sujet, contenu);
        }
    }
}