package tn.esprit.devdream.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="post")

public class Post implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_Post")
    private Long id_Post;
    private String titre;
    private String contenu;

    @ManyToOne
    @JsonIgnore
    private User posteur;


    @JsonIgnore
    private List<Interaction> interactions;
    @OneToMany(mappedBy = "post")
    public List<Interaction> getInteractions(){


        return interactions;
    }
    @JsonIgnore
    public void setInteractions(List<Interaction> interactions){

        this.interactions=interactions;
    }
    @JsonIgnore
    private List<CommentairePost> commentairePostList;
    @OneToMany(mappedBy = "post")
    public List<CommentairePost> getCommentairePostList(){


        return commentairePostList;
    }
    public void setCommentairePostList(List<CommentairePost> commentairePostList){

        this.commentairePostList=commentairePostList;
    }






}
