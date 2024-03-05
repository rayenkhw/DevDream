package tn.esprit.devdream.controllers;



import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.services.UserServices;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
//@PreAuthorize("hasRole('Esprit') ")
public class UserControllers {


    @Autowired
    UserServices us;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return us.addUser(user);
    }

    @GetMapping("/showAlluser")
    public List<User> retrieveAllUser() {
        return us.retrieveAllUsers();
    }
    @GetMapping("/UsersArchives")
    public List<User> UsersArchives() {
        return us.UsersArchives();
    }

    @PostMapping("/removeUser/{id}")
    public void removeUser(@PathVariable Long id) {

        us.removeUser(id);

    }
    @PostMapping("/removeUserArchives/{id}")
    public void removeUserArchives(@PathVariable Long id) {

        us.removeUserArchives(id);

    }

}