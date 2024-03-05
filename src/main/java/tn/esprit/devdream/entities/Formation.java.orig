package tn.esprit.devdream.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Formation")
public class Formation implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_formation")
    private Long id_formation;

    private String titre;
    private String description;
    @Temporal(TemporalType.DATE)
    private Date date_debut_formation;
    @Temporal(TemporalType.DATE)
    private Date date_fin_formation;
<<<<<<< HEAD
=======
    private int nombreJadore;
    private String mot_cle;
>>>>>>> origin/ranimback

    private Boolean disponiblite;

    @ManyToOne
<<<<<<< HEAD
=======
    @JoinColumn(name = "formation_id")
>>>>>>> origin/ranimback
    private User createur_formation; //chkoun 3mal el formation

    @ManyToMany
    private List<User> participantsList; //chkoun la3bed li bech ta7dher lel formation

}
