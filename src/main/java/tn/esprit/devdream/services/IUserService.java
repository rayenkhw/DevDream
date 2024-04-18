
package tn.esprit.devdream.services;


import tn.esprit.devdream.entities.User;

import java.util.List;

public interface IUserService {


    public List<User> retrieveAllUsers();
    public User retrieveUser(Long iduser);
    public User addUser(User user );
    public void removeUser(Long iduser);
    public User modifyUser(User user);

    User findById(Long encadrantId);

    List<User> UsersArchives();

    void removeUserArchives(Long id);

    User updateUser(Long userId, User userDetails);

    List<User> UsersBanne();

    void removeUserBanne(Long iduser);

    List<Object[]> getUserStatistics();
}
