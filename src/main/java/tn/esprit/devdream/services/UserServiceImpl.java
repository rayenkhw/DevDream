package tn.esprit.devdream.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.IUserRepository;

import java.util.List;
@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    IUserRepository iUserRepository;
    @Override
    public List<User> retrieveAllUsers() {
        return iUserRepository.findAll();
    }

    @Override
    public User retrieveUser(Long userId) {
        return iUserRepository.findById(userId).get();
    }

    @Override
    public User addUser(User user) {
        return iUserRepository.save(user);
    }

    @Override
    public void removeUser(Long userId) {
       iUserRepository.deleteById(userId);
    }

    @Override
    public User modifyUser(User user) {
        return iUserRepository.save(user);
    }

    @Override
    public User findById(Long id) {
        return iUserRepository.findById(id).orElse(null);
    }
}
