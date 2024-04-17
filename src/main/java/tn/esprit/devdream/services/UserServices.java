
package tn.esprit.devdream.services;


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

    @Override
    public User findById(Long encadrantId) {
        return null;
    }

    @Override
    public List<User> UsersArchives() {
        return null;
    }

    @Override
    public void removeUserArchives(Long id) {

    }

    @Override
    public User updateUser(Long userId, User userDetails) {
        return null;
    }

    @Override
    public List<User> UsersBanne() {
        return null;
    }

    @Override
    public void removeUserBanne(Long iduser) {

    }

    @Override
    public List<Object[]> getUserStatistics() {
        return null;
    }
}

