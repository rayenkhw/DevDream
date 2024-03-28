package tn.esprit.devdream.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.repositories.UserRepository;
@Service
@Slf4j

public class UserServiceImpl implements IUserServiceImpl{
    UserRepository userRepository;
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Object findTopContributor() {
        return userRepository.findUserWithMostCommentsAndInteractions();
    }
}
