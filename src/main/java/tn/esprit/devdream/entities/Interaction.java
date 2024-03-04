package tn.esprit.devdream.entities;

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
@Table(name="Interaction")

public class Interaction implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_interaction")
    private Long id_interaction;

    @Enumerated(EnumType.STRING)
    private Type_inter interaction;

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
