package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devdream.entities.Notification;

public interface INotificationRepository extends JpaRepository<Notification,Long> {
}
