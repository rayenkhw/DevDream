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
@Table(name="Commentaire")

public class Commentaire implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name="id_comment")
    private Long id_comment;
    private String contenu;
=======
    @Column(name="Id_comment")
    private Long Id_comment;
    private String Contenu;
>>>>>>> origin/ranimback

    @ManyToOne
    private Tache tache;



}
