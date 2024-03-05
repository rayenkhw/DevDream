package tn.esprit.devdream.controllers;

import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Message;
import tn.esprit.devdream.services.IMessageService;

import java.util.List;

@RestController
@RequestMapping("/message")
@CrossOrigin(origins = "*")
public class MessageRestController {
    IMessageService messageService;
    @GetMapping("/retrieve-all-messages")
    public List<Message> getMessages() {
        List<Message> listMessages = messageService.retrieveAllMessage();
        return listMessages;
    }
    @GetMapping("/retrieve-chat/{idMessage}")
    public Message retrieveMessage(@PathVariable("idMessage") Long idMessage) {
        Message message = messageService.retrieveMessage(idMessage);
        return message;
    }
    @PostMapping("/add-Message")
    public Message addMessage(@RequestBody Message m) {
        Message message = messageService.addMessage(m);
        return message;
    }
    @DeleteMapping("/remove-message/{idMessage}")
    public  void removeMessage(@PathVariable("idMessage")Long idMessage) {
        messageService.removeMessage(idMessage);
    }
    @PutMapping("/modify-message")
    public Message modifyMessage(@RequestBody Message message) {
        Message modifyMessage = messageService.modifyMessage(message);
        return modifyMessage;
    }

}
