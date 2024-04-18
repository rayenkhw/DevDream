package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.CommentairePost;
import tn.esprit.devdream.entities.Post;
import tn.esprit.devdream.repositories.CommentairePostRepository;
import tn.esprit.devdream.repositories.PostRepository;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class CommentairePostServiceImpl implements ICommentairePostServiceImpl{
    CommentairePostRepository commentairePostRepository ;
   PostRepository postRepository;



    @Override
    public CommentairePost addCommentairePost(CommentairePost commentairePost) {
        return commentairePostRepository.save(commentairePost);
    }

    @Override
    public List<CommentairePost> retrieveCommentairePosts() {

        return commentairePostRepository.findAll();
    }

    @Override
    public CommentairePost retrieveCommentairePost(Long id_com) {
        return commentairePostRepository.findById(id_com).orElse(null);
    }

    @Override
    public CommentairePost updateCommentairePost(CommentairePost commentairePost) {
        return commentairePostRepository.save(commentairePost);
    }

    @Override
    public void removeCommentairePost(Long id_com) {
        commentairePostRepository.deleteById(id_com);

    }
    @Override
    public List<CommentairePost> getCommentairePostByPostId(Long id_Post) {
        return commentairePostRepository.findByPostId(id_Post);
    }
    @Override
    public CommentairePost affecterCommentairePost(CommentairePost commentairePost, Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new RuntimeException("Post not found"));
        commentairePost.setPost(post);
        return commentairePostRepository.save(commentairePost);
    }

}
