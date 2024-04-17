package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.devdream.entities.Chat;

public interface IChatRepository extends JpaRepository<Chat,Long> {

    @Query("SELECT a FROM Chat a WHERE a.id_chat = :id_chat")
    Chat findChatById_chat(@Param("id_chat")Long id_chat);
}
