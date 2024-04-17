package tn.esprit.devdream.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.IUserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Primary
@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    IUserRepository iUserRepository;
    private static final List<User> users_list=new ArrayList<>();
    public void register(User user){
        user.setChargeTravail("online");
        users_list.add(user);
    }
    @Override
    public List<User> retrieveAllUsers() {
        return iUserRepository.findByDisponibilite(1);
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
        //   userrepo.deleteById(iduser);
        Optional<User> userOptional = iUserRepository.findById(userId);

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Modifier le champ disponibilite
            user.setDisponibilite(0);

            // Sauvegarder l'utilisateur mis à jour
            iUserRepository.save(user);
        } else {
            // Gérer le cas où l'utilisateur n'est pas trouvé, par exemple en lançant une exception
            throw new RuntimeException("Utilisateur non trouvé avec l'ID : " + userId);
        }
    }

    @Override
    public User modifyUser(User user) {
        return iUserRepository.save(user);
    }

    @Override
    public List<User> UsersArchives() {
        return iUserRepository.findByDisponibilite(0);
    }

    @Override
    public void removeUserArchives(Long iduser) {
//   userrepo.deleteById(iduser);
        Optional<User> userOptional = iUserRepository.findById(iduser);

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Modifier le champ disponibilite
            user.setDisponibilite(1);

            // Sauvegarder l'utilisateur mis à jour
            iUserRepository.save(user);
        } else {
            // Gérer le cas où l'utilisateur n'est pas trouvé, par exemple en lançant une exception
            throw new RuntimeException("Utilisateur non trouvé avec l'ID : " + iduser);
        }
    }

    @Override
    public User findById(Long id) {
        return iUserRepository.findById(id).orElse(null);
    }

    @Override
    public List<User> UsersBanne() {
        //   return userrepo.findByBanss(0);
        return null;
    }

    @Override
    public void removeUserBanne(Long iduser) {
        iUserRepository.deleteById(iduser);
        Optional<User> userOptional = iUserRepository.findById(iduser);

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            user.setBanss(1);

            iUserRepository.save(user);
        } else {
            throw new RuntimeException("Utilisateur non trouvé avec l'ID : " + iduser);
        }

    }


    /*@Override
    public User modifyUser(User user) {
        return  userrepo.save(user);
    }*/
    public List<Object[]> getUserStatistics() {
        return iUserRepository.countUsersByRole();
    }
    public User updateUser(Long id, User userDetails) {
        // Check if the user exists in the database
        User user = iUserRepository.findById(id)
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
        final User updatedUser = iUserRepository.save(user);
        return updatedUser;
    }
}
