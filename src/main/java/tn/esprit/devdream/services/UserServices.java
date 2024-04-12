package tn.esprit.devdream.services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.multipart.MultipartFile;
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
    private  PasswordEncoder passwordEncoder;


    @Override
    public List<User> retrieveAllUsers() {

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

         return userrepo.save(user);
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

            user.setDisponibilite(1);

            userrepo.save(user);
        } else {
            // Gérer le cas où l'utilisateur n'est pas trouvé, par exemple en lançant une exception
            throw new RuntimeException("Utilisateur non trouvé avec l'ID : " + iduser);
        }

    }

    @Override
    public List<User> UsersBanne() {
        //   return userrepo.findByBanss(0);
       return null;
    }

    @Override
    public void removeUserBanne(Long iduser) {
        userrepo.deleteById(iduser);
        Optional<User> userOptional = userrepo.findById(iduser);

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            user.setBanss(1);

            userrepo.save(user);
        } else {
            throw new RuntimeException("Utilisateur non trouvé avec l'ID : " + iduser);
        }

    }


    @Override
    public User modifyUser(User user) {
        return  userrepo.save(user);
    }
    public List<Object[]> getUserStatistics() {
        return userrepo.countUsersByRole();
    }
    public User updateUser(Long id, User userDetails) {
        // Check if the user exists in the database
        User user = userrepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found for this id :: " + id));

        // Update the user's attributes with the details provided
        user.setIdentifiant(userDetails.getIdentifiant());
//        user.setNom(userDetails.getNom());
//        user.setPrenom(userDetails.getPrenom());
//        user.setCin(userDetails.getCin());
//        user.setEmail(userDetails.getEmail());
//        user.setPassword(passwordEncoder.encode(userDetails.getPassword())); // Consider encrypting the password if you haven't done so already
//        user.setRole(userDetails.getRole());
//        user.setNiveau(userDetails.getNiveau());
//        user.setSpecialite(userDetails.getSpecialite());
//        user.setImage(userDetails.getImage());
//        user.setTel(userDetails.getTel());

        // Save the updated user details in the database and return the updated user
        final User updatedUser = userrepo.save(user);
        return updatedUser;
    }
}

