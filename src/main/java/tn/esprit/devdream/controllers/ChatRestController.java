package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Chat;
import tn.esprit.devdream.services.IChatService;

import java.util.List;
@Controller
@RestController
@RequestMapping("/chat")
@CrossOrigin(origins = "http://localhost:4200")
public class ChatRestController {

    @Autowired
    IChatService chatService;
    //@MessageMapping("/chat.register")
    //@SendTo("/topic/public")
    //public Chat register(@Payload Chat chat, SimpMessageHeaderAccessor headerAccessor){
      //  headerAccessor.getSessionAttributes().put("username",chat.getSender());
        //return chat;
    //}


    @PostMapping("/sendmessage/{idUser}/{idChat}/{message}")
    public void sendmessage(@PathVariable("idUser") Long idUser,@PathVariable("idChat") Long idChat, @PathVariable("message") String message){

        chatService.sendmsg(idChat,message,idUser);

    }




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
    //    @PostMapping("/add-chat")
//    public Chat addChat(@RequestBody Chat c) {
//        Chat chat = chatService.addChat(c);
//        return chat;
//    }
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
