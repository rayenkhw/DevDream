package com.example.DevTeam.Entities;

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
    private String Description;

    @Enumerated(EnumType.STRING)
    private Tache_status Status;

    private String delai;
    private String performance;
    private String remarque;

    @OneToMany(mappedBy = "tache")
    private List<Commentaire> commentaireList;

    @OneToMany(mappedBy = "tache")
    private List<Etiquette> etiquetteList;

    @ManyToOne
    private User encadrant;

    @ManyToOne
    private User etudiant;



}
