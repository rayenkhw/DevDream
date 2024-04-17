package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Chat;
import tn.esprit.devdream.entities.Message;

import java.util.List;

public interface IChatService {
    public Chat addChat(Chat c);
    public Chat modifyChat(Chat chat);
    public List<Chat> retrieveAllChat();

    public Chat retrieveChat(Long idChat);
    public void removeChat(Long idChat);

    public Message sendmsg(Long idChat, String message,Long from);
}
