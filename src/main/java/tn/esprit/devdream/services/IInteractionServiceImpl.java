package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Interaction;
import tn.esprit.devdream.entities.Type_interaction;

import java.util.Optional;

public interface IInteractionServiceImpl {


    Optional<Interaction> toggleInteraction(Long id_Post, Long id, Type_interaction Type_interaction);
    Optional<Interaction> toggleLike(Long id_Post, Long id);
   Optional<Interaction> toggleDislike(Long id_Post, Long id);
    Optional<Interaction> toggleLove(Long id_Post, Long id);
    int getLikesCount(Long id_Post);
    int getDislikesCount(Long id_Post);
     int getLovesCount(Long id_Post);

}

