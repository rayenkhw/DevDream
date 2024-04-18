package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Chat;
import tn.esprit.devdream.entities.Message;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.IChatRepository;
import tn.esprit.devdream.repositories.IMessageRepository;
import tn.esprit.devdream.repositories.UserRepository;

import java.util.List;
@Service
@AllArgsConstructor
public class ChatServiceImpl implements IChatService {
    @Autowired
    IChatRepository iChatRepository;
    @Autowired
    IMessageRepository messageRepository;
    @Autowired
    UserRepository userRepository;
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

    @Override
    public Message sendmsg(Long idChat, String message, Long id_user) {
        User from = userRepository.findUserByIdUser(id_user);
        Message msg = new Message();
        msg.setMsg(message);
        msg.setFrom(from);
        Chat chat = iChatRepository.findChatById_chat(idChat);
        msg.setChat(chat);
        List<Message> messages;
        messages = chat.getMessages();
        messages.add(msg);
        chat.setMessages(messages);
        messageRepository.save(msg);
        iChatRepository.save(chat);
        return  msg;
    }



}
