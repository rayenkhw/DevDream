package com.example.DevTeam.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="depot")

public class Depot implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_depot")
    private Long id_depot;
    private String Travail;
    private String RapportDeStage;
    private String JournalDeStage;
    @Temporal(TemporalType.DATE)
    private Date Date_depot;

    @OneToOne
    private Stage stage;

    @ManyToOne
    private User etudiant;
}
