package tn.esprit.devdream.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.UserRepository;

import java.util.List;

@Service
public class UserServices implements IUserService {
    @Autowired
    UserRepository userrepo ;



    @Override
    public List<User> retrieveAllUsers() {
        return (List<User>) userrepo.findAll();
    }

    @Override
    public User retrieveUser(Long iduser) {
        return userrepo.findById(iduser.intValue()).get();
    }

    @Override
    public User addUser(User user) {
        return  userrepo.save(user);
    }

    @Override
    public void removeUser(Long iduser) {
   userrepo.deleteById(iduser.intValue());

    }

    @Override
    public User modifyUser(User user) {
        return  userrepo.save(user);
    }
}

