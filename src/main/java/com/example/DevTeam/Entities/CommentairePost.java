package com.example.DevTeam.Entities;

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
    @Column(name="id_idcom")
    private Long id_idcom;
    private String contenu;

    private Post post;
    @ManyToOne
    @JoinColumn(name = "Id_Post", insertable = false, updatable = false)
    public Post getPost(){

        return post;
    }

    public void setPost(Post post){

        this.post = post;
    }


    private User user;
    @ManyToOne
    @JoinColumn(name = "id", insertable = false, updatable = false)
    public User getUser(){



        return user;
    }
    public void setUser(User user){



        this.user = user;
    }

}
