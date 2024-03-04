package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devdream.entities.Chat;

public interface IChatRepository extends JpaRepository<Chat,Long> {
}
