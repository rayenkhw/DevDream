package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devdream.entities.Message;

public interface IMessageRepository extends JpaRepository<Message,Long> {
}
