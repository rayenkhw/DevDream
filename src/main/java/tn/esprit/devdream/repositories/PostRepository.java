package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.devdream.entities.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}
