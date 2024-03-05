package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServices implements IUserService {
    @Autowired
    UserRepository userrepo ;



    @Override
    public List<User> retrieveAllUsers() {
//        return userrepo.findAll();
        return userrepo.findByDisponibilite(1);
    }
    @Override
    public List<User> UsersArchives() {

        return userrepo.findByDisponibilite(0);
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
//   userrepo.deleteById(iduser);
        Optional<User> userOptional = userrepo.findById(iduser);

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Modifier le champ disponibilite
            user.setDisponibilite(0);

            // Sauvegarder l'utilisateur mis à jour
            userrepo.save(user);
        } else {
            // Gérer le cas où l'utilisateur n'est pas trouvé, par exemple en lançant une exception
            throw new RuntimeException("Utilisateur non trouvé avec l'ID : " + iduser);
        }

    }
    @Override
    public void removeUserArchives(Long iduser) {
//   userrepo.deleteById(iduser);
        Optional<User> userOptional = userrepo.findById(iduser);

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Modifier le champ disponibilite
            user.setDisponibilite(1);

            // Sauvegarder l'utilisateur mis à jour
            userrepo.save(user);
        } else {
            // Gérer le cas où l'utilisateur n'est pas trouvé, par exemple en lançant une exception
            throw new RuntimeException("Utilisateur non trouvé avec l'ID : " + iduser);
        }

    }

    @Override
    public User modifyUser(User user) {
        return  userrepo.save(user);
    }
}

