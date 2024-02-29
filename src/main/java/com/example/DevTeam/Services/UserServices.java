package com.example.DevTeam.Services;

import com.example.DevTeam.Entities.User;
import com.example.DevTeam.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices implements IUserService {
    @Autowired
    UserRepository userrepo ;



    @Override
    public List<User> retrieveAllUsers() {
        return userrepo.findAll();
    }

    @Override
    public User retrieveUser(Long iduser) {
        return userrepo.findById(iduser).get();
    }

    @Override
    public User addUser(User user) {
        return  userrepo.save(user);
    }

    @Override
    public void removeUser(Long iduser) {
   userrepo.deleteById(iduser);

    }

    @Override
    public User modifyUser(User user) {
        return  userrepo.save(user);
    }
}

