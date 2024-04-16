package tn.esprit.devdream.services;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Post;
import tn.esprit.devdream.entities.Type_interaction;
import tn.esprit.devdream.repositories.IUserRepository;
import tn.esprit.devdream.repositories.InteractionRepository;
import tn.esprit.devdream.repositories.PostRepository;

import java.util.List;
@Service
@Slf4j
@AllArgsConstructor
public class PostServiceImpl implements IPostServiceImpl {
    @Autowired
    private InteractionRepository interactionRepository;
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private IUserRepository userRepository;
    @Override
    public Post addPost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public List<Post> retrievePosts() {

        return postRepository.findAll();
    }
    @Override
    public Post retrievePost(Long id_Post) {
        return postRepository.findById(id_Post).orElse(null);
    }

    @Override
    public Post updatePost(Post post) {
        return postRepository.save(post);
    }

    @Override
    @Transactional
    public void removePost(Long id_Post) {
        interactionRepository.deleteByPostId(id_Post);
        postRepository.deleteById(id_Post);

    }
    @Override
    public Post updatePostBadge(Post post) {
        int likes = interactionRepository.countByPostIdAndTypeInteraction(post.getId_Post(), Type_interaction.Like);
        int dislikes = interactionRepository.countByPostIdAndTypeInteraction(post.getId_Post(), Type_interaction.Dislike);
        int loves = interactionRepository.countByPostIdAndTypeInteraction(post.getId_Post(), Type_interaction.Love);

        String badge = "";

        if (likes >= 10) {
            badge = "Actif";
        } else if (likes >= 5 && dislikes >= 5) {
            badge = "Controversé";
        } else if (loves >= 5) {
            badge = "Aimé";
        }

        post.setBadge(badge);
        return postRepository.save(post);
    }

}
