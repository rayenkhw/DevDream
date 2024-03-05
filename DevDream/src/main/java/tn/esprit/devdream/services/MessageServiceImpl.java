package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Message;
import tn.esprit.devdream.repositories.IMessageRepository;

import java.util.List;

public class MessageServiceImpl implements IMessageService{
    IMessageRepository iMessageRepository;
    @Override
    public Message addMessage (Message m) {
        return iMessageRepository.save(m);
    }

    @Override
    public Message modifyMessage(Message message) {
        return iMessageRepository.save(message);
    }
    @Override
    public List<Message> retrieveAllMessage() {

        return iMessageRepository.findAll();
    }
    @Override
    public Message retrieveMessage(Long idMessage) {
        return iMessageRepository.findById(idMessage).get();
    }
    @Override
    public void removeMessage(Long idMessage) {
        iMessageRepository.deleteById(idMessage);

    }
}
