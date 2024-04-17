package tn.esprit.devdream.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="CommentairePost")
public class CommentairePost implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_com")
    private Long id_com;

    private String contenu;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_Post") // Assurez-vous que ce nom de colonne correspond à la clé étrangère dans la base de données
    private Post post;

    @ManyToOne
    @JoinColumn(name = "id_Post", insertable = false, updatable = false)
    public Post getPost(){

        return post;
    }

    public void setPost(Post post){

        this.post = post;
    }


    private User user;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id", insertable = false, updatable = false)
    public User getUser(){



        return user;
    }
    public void setUser(User user){



        this.user = user;
    }




}
