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
@Table(name="Reponse")

public class Reponse implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name="id_reponse")
    private Long id_reponse;
=======
    @Column(name="Id_reponse")
    private Long Id_reponse;
>>>>>>> origin/ranimback


    private String reponse;

    @OneToOne
    private Reclamation reclamation;

}
