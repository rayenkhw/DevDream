package com.example.DevTeam.Controllers;


import com.example.DevTeam.Entities.User;
import com.example.DevTeam.Services.UserServices;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
//@PreAuthorize("hasRole('Esprit') ")
public class UserControllers {


    @Autowired
    UserServices us ;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user ){
        return us.addUser(user);
    }
    @GetMapping("/showAlluser")
    public List<User> retrieveAllUser(){
        return us.retrieveAllUsers();
    }
}

