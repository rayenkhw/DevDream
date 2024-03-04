package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Chat;
import tn.esprit.devdream.repositories.IChatRepository;

import java.util.List;
@Service
@AllArgsConstructor
public class ChatServiceImpl implements IChatService {
    IChatRepository iChatRepository;
    @Override
    public Chat addChat (Chat c) {
        return iChatRepository.save(c);
    }

    @Override
    public Chat modifyChat(Chat chat) {
        return iChatRepository.save(chat);
    }
    @Override
    public List<Chat> retrieveAllChat() {

        return iChatRepository.findAll();
    }
    @Override
    public Chat retrieveChat(Long idChat) {
        return iChatRepository.findById(idChat).get();
    }
    @Override
    public void removeChat(Long idChat) {
        iChatRepository.deleteById(idChat);

    }
}
