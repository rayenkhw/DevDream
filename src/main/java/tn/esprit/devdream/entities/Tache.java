package tn.esprit.devdream.entities;

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
@Table(name="Tache")

public class Tache implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_tache")
    private Long id_tache;
    private Integer priorite;
    private String description;

    @Enumerated(EnumType.STRING)
    private Tache_status Status;

    private String delai;
    private String performance;
    private String remarque;

    @OneToMany(mappedBy = "tache",cascade = {CascadeType.MERGE,CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Commentaire> commentaireList;

    @OneToMany(mappedBy = "tache", cascade={CascadeType.MERGE,CascadeType.PERSIST})

    private List<Etiquette> etiquetteList;

    @ManyToOne
    @JoinColumn(name = "encadrant_id")
    private User encadrant;

    @ManyToOne
    @JoinColumn(name = "etudiant_id")
    private User etudiant;



}
