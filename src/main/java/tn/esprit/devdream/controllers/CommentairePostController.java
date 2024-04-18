package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.CommentairePost;
import tn.esprit.devdream.services.ICommentairePostServiceImpl;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/commentairePost")
@CrossOrigin(origins ="http://localhost:4200")
public class CommentairePostController {

    ICommentairePostServiceImpl commentairePostService;
/*
    @PostMapping("/addCommentairePost")
    CommentairePost addCommentairePost (@RequestBody CommentairePost commentairePost)
    {
        return commentairePostService.addCommentairePost(commentairePost);
    }
    */

    @GetMapping("/commentairePost/{id_com}")
    CommentairePost getCommentairePosts(@PathVariable Long id_com)
    {
        return commentairePostService.retrieveCommentairePost(id_com);
    }
    @GetMapping("/allCommentairePosts")
    List<CommentairePost> getCommentairePosts()
    {
        return commentairePostService.retrieveCommentairePosts();
    }

    @DeleteMapping("/commentairePost/{id_com}")
    void deleteCommentairePost(@PathVariable Long id_com)
    {
        commentairePostService.removeCommentairePost(id_com);
    }

    @PutMapping("/updateCommentairePost")
    CommentairePost updateCommentairePost(@RequestBody CommentairePost commentairePost) {
        return commentairePostService.updateCommentairePost(commentairePost);
    }
    @GetMapping("/{id_Post}/commentairePosts")
    public ResponseEntity<List<CommentairePost>> getCommentairesByPostId(@PathVariable Long id_Post) {
        return ResponseEntity.ok(commentairePostService.getCommentairePostByPostId(id_Post));
    }
    @PostMapping("/posts/{id_Post}/commentaires")
    public CommentairePost affecterCommentairePost(@PathVariable(value = "id_Post") Long id_Post,
                                              @RequestBody CommentairePost commentairePost) {
        return commentairePostService.affecterCommentairePost(commentairePost, id_Post);
    }


}
