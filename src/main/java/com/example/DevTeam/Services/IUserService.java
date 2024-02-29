package com.example.DevTeam.Services;

import com.example.DevTeam.Entities.User;

import java.util.List;

public interface IUserService {


    public List<User> retrieveAllUsers();
    public User retrieveUser(Long iduser);
    public User addUser(User user );
    public void removeUser(Long iduser);
    public User modifyUser(User user);
}
