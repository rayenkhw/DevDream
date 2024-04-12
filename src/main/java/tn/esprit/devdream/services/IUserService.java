package tn.esprit.devdream.services;

import org.springframework.web.multipart.MultipartFile;
import tn.esprit.devdream.entities.User;

import java.util.List;

public interface IUserService {


    public List<User> retrieveAllUsers();
    public User retrieveUser(Long iduser);
    public User addUser(User user) ;
    public void removeUser(Long iduser);
    public User modifyUser(User user);
    public List<User> UsersArchives();
    public void removeUserArchives(Long iduser) ;
    public List<User> UsersBanne();
    public void removeUserBanne(Long iduser) ;
    public List<Object[]> getUserStatistics();

    }
