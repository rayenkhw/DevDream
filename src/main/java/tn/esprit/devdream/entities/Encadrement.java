package tn.esprit.devdream.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(name="Encadrement")
public class Encadrement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_encadrement")
    private Long id_encadrement;
    /*
    @ManyToOne
    private User encadreur;

    @OneToMany(mappedBy = "encadrement")
    private List<User> etudiants_encadree;

*/
    @ManyToOne
    @JsonBackReference
//    @JoinColumn(name = "encadrant_id")
    private User encadrant;

    @ManyToOne
   @JsonBackReference
//    @JoinColumn(name = "etudiant_id")
    private User etudiant;


}
