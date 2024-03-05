package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Notification;
import tn.esprit.devdream.repositories.INotificationRepository;

import java.util.List;
@Service
@AllArgsConstructor
public class NotificationServiceImpl implements INotificationService{
    INotificationRepository iNotificationRepository;
    @Override
    public Notification addNotification (Notification n) {
        return iNotificationRepository.save(n);
    }

    @Override
    public Notification modifyNotification(Notification notification) {
        return iNotificationRepository.save(notification);
    }
    @Override
    public List<Notification> retrieveAllNotification() {

        return iNotificationRepository.findAll();
    }
    @Override
    public Notification retrieveNotification(Long idNotification) {
        return iNotificationRepository.findById(idNotification).get();
    }
    @Override
    public void removeNotification(Long idNotification) {
        iNotificationRepository.deleteById(idNotification);

    }

}
