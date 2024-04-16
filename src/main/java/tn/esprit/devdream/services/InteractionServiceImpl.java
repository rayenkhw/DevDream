package tn.esprit.devdream.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Interaction;
import tn.esprit.devdream.entities.Post;
import tn.esprit.devdream.entities.Type_interaction;
import tn.esprit.devdream.entities.User;
import tn.esprit.devdream.repositories.IUserRepository;
import tn.esprit.devdream.repositories.InteractionRepository;
import tn.esprit.devdream.repositories.PostRepository;

import java.util.Optional;

@Service
@Slf4j
public class InteractionServiceImpl implements IInteractionServiceImpl {
    @Autowired
    private InteractionRepository interactionRepository;
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private IUserRepository userRepository;


    @Override
    public Optional<Interaction> toggleLike(Long idPost, Long idUser) {
        return toggleInteraction(idPost, idUser, Type_interaction.Like);
    }

    @Override
    public Optional<Interaction> toggleDislike(Long idPost, Long idUser) {
        return toggleInteraction(idPost, idUser, Type_interaction.Dislike);
    }

    @Override
    public Optional<Interaction> toggleLove(Long idPost, Long idUser) {
        return toggleInteraction(idPost, idUser, Type_interaction.Love);
    }

    @Override
    public int getLikesCount(Long idPost) {
        return interactionRepository.countByPostIdAndTypeInteraction(idPost, Type_interaction.Like);
    }

    @Override
    public int getDislikesCount(Long idPost) {
        return interactionRepository.countByPostIdAndTypeInteraction(idPost, Type_interaction.Dislike);
    }

    @Override
    public int getLovesCount(Long idPost) {
        return interactionRepository.countByPostIdAndTypeInteraction(idPost, Type_interaction.Love);
    }

    @Override
    public Optional<Interaction> toggleInteraction(Long idPost, Long idUser, Type_interaction typeInteraction) {
        Post post = postRepository.findById(idPost)
                .orElseThrow(() -> new RuntimeException("Post not found with id " + idPost));
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("User not found with id " + idUser));

        Optional<Interaction> existingInteraction = interactionRepository.findByPostAndUserAndTypeInteraction(post, user, typeInteraction);

        if (existingInteraction.isPresent()) {
            interactionRepository.delete(existingInteraction.get());
            return Optional.empty();
        } else
        {
            Interaction newInteraction = new Interaction();
            newInteraction.setPost(post);
            newInteraction.setUser(user);
            newInteraction.setType_interaction(typeInteraction);
            return Optional.of(interactionRepository.save(newInteraction));
        }

    }


}