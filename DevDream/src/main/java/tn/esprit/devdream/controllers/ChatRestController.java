package tn.esprit.devdream.controllers;

import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Chat;
import tn.esprit.devdream.services.IChatService;

import java.util.List;
@RestController
@RequestMapping("/chat")
@CrossOrigin(origins = "*")
public class ChatRestController {
    IChatService chatService;
    @GetMapping("/retrieve-all-chats")
    public List<Chat> getChats() {
        List<Chat> listChats = chatService.retrieveAllChat();
        return listChats;
    }
    @GetMapping("/retrieve-chat/{idChat}")
    public Chat retrieveChat(@PathVariable("idChat") Long idChat) {
        Chat chat = chatService.retrieveChat(idChat);
        return chat;
    }
    @PostMapping("/add-chat")
    public Chat addChat(@RequestBody Chat c) {
        Chat chat = chatService.addChat(c);
        return chat;
    }
    @DeleteMapping("/remove-chat/{idChat}")
    public  void removeChat(@PathVariable("idChat")Long idChat) {
        chatService.removeChat(idChat);
    }
    @PutMapping("/modify-chat")
    public Chat modifyChat(@RequestBody Chat chat) {
        Chat modifyChat = chatService.modifyChat(chat);
        return modifyChat;
    }

}
