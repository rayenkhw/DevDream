package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Notification;

import java.util.List;

public interface INotificationService {
    public Notification addNotification(Notification n);
    public Notification modifyNotification(Notification notification);
    public List<Notification> retrieveAllNotification();

    public Notification retrieveNotification(Long idNotification);
    public void removeNotification(Long idNotification);
}
