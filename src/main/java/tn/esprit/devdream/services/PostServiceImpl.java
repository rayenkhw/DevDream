package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Post;
import tn.esprit.devdream.repositories.PostRepository;

import java.util.List;
@Service
@Slf4j
@AllArgsConstructor
public class PostServiceImpl implements IPostServiceImpl {
    PostRepository postRepository;

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
    public void removePost(Long id_Post) {
        postRepository.deleteById(id_Post);

    }
}
