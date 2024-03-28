package tn.esprit.devdream.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.devdream.repositories.UserRepository;
@RestController
@RequestMapping("/api/User")
@CrossOrigin(origins ="http://localhost:4200")
public class UserController {
    UserRepository userRepository;
    @GetMapping
            ("/top-contributor")
    public Object findTopContributor() {
        return userRepository.findUserWithMostCommentsAndInteractions();
    }
}
