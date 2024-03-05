package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Message;

import java.util.List;

public interface IMessageService {
    public Message addMessage(Message m);
    public Message modifyMessage(Message message);
    public List<Message> retrieveAllMessage();

    public Message retrieveMessage(Long idMessage);
    public void removeMessage(Long idMessage);
}
