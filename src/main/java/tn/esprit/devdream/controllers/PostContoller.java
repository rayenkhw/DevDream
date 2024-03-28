package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Post;
import tn.esprit.devdream.repositories.UserRepository;
import tn.esprit.devdream.services.IPostServiceImpl;
import tn.esprit.devdream.services.InteractionServiceImpl;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/post")
@CrossOrigin(origins ="http://localhost:4200")
public class PostContoller {

    UserRepository userRepository;
    IPostServiceImpl postService;
    @Autowired
    private InteractionServiceImpl interactionService;

    @PostMapping("/addPost")
    Post addPost (@RequestBody Post post)
    {
        return postService.addPost(post);
    }
    @GetMapping("/post/{id_Post}")
    Post getPost(@PathVariable Long id_Post)
    {
        return postService.retrievePost(id_Post);
    }
    @GetMapping("/allPosts")
    List<Post> getPosts()
    {
        return postService.retrievePosts();
    }

    @DeleteMapping("/post/{id_Post}")
    void deletePost(@PathVariable Long id_Post)
    {
        postService.removePost(id_Post);
    }

    @PutMapping("/updatePost")
    Post updatePost(@RequestBody Post post) {
        return postService.updatePost(post);
    }

    @PutMapping("/{id_Post}/update-badge")
    public ResponseEntity<?> updatePostBadge(@PathVariable Long id_Post) {
        try {
            Post post = postService.retrievePost(id_Post);
            Post updatedPost = postService.updatePostBadge(post);
            return ResponseEntity.ok(updatedPost); // Retourner le post mis à jour
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Une erreur s'est produite lors de la mise à jour du badge du post.");
        }
    }





}
