package tn.esprit.devdream.controllers;



import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.services.UserServices;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
//@PreAuthorize("hasRole('Esprit') ")
public class UserControllers {

    @Autowired
    UserServices us;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user )  {

        return us.addUser(user);
    }

    @GetMapping("/showAlluser")
    public List<User> retrieveAllUser() {
        return us.retrieveAllUsers();
    }
    @GetMapping("/UsersArchives")
    public List<User> UsersArchives() {
        return us.UsersArchives();
    }

    @PostMapping("/removeUser/{id}")
    public void removeUser(@PathVariable Long id) {

        us.removeUser(id);

    }
    @PostMapping("/removeUserArchives/{id}")
    public void removeUserArchives(@PathVariable Long id) {

        us.removeUserArchives(id);

    }
    @GetMapping("/roles")
    public List<Object[]> getUserRoleStatistics() {
        return us.getUserStatistics();
    }
    @PutMapping("/updateUser/{id}")
    public User updateUser(@PathVariable(value = "id") Long userId, @RequestBody User userDetails) {

        return us.updateUser(userId, userDetails);
    }

//    @PostMapping("/removeUserbanne/{id}")
//    public void removeUserbanne(@PathVariable Long id) {
//
//        us.removeUserBanne(id);
//
//    }
//    @GetMapping("/Usersbanne")
//    public List<User> Usersbanne() {
//        return us.UsersBanne();
//    }
//@PostMapping(value = "/ajouterNews", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//public News addNews(@RequestParam("title") String title,
//                    @RequestParam("description") String description,
//                    @RequestParam("datenews") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate datenews,
//                    @RequestParam("file") MultipartFile imageFile) {
//    try {
//        System.out.println("saving image");
//        // Save the image and get the path
//        String imagePath = saveImage(imageFile);
//
//        // Create a new News object and set its properties
//        News news = new News();
//        news.setTitle(title);
//        news.setDescription(description);
//        news.setDatenews(datenews);
//        news.setImagenews(imagePath); // Set the image path
//        System.out.println("saving news");
//        // Save the news object using your service
//        return iService.addNews(news);
//    } catch (IOException e) {
//        throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error saving image", e);
//    }
//}
//

}