package tn.esprit.devdream.controllers;

import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Notification;
import tn.esprit.devdream.services.INotificationService;

import java.util.List;

@RestController
@RequestMapping("/notification")
@CrossOrigin(origins = "*")
public class NotificationRestController {
    INotificationService notificationService;
    @GetMapping("/retrieve-all-notifications")
    public List<Notification> getNotifications() {
        List<Notification> listNotifications = notificationService.retrieveAllNotification();
        return listNotifications;
    }
    @GetMapping("/retrieve-notification/{idNotification}")
    public Notification retrieveNotification(@PathVariable("idNotification") Long idNotification) {
        Notification notification = notificationService.retrieveNotification(idNotification);
        return notification;
    }
    @PostMapping("/add-notification")
    public Notification addNotification(@RequestBody Notification n) {
        Notification notification = notificationService.addNotification(n);
        return notification;
    }
    @DeleteMapping("/remove-notification/{idNotification}")
    public  void removeNotification(@PathVariable("idNotification")Long idNotification) {
        notificationService.removeNotification(idNotification);
    }
    @PutMapping("/modify-reclamation")
    public Notification modifyNotification(@RequestBody Notification notification) {
        Notification modifyNotification = notificationService.modifyNotification(notification);
        return modifyNotification;
    }

}
