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
@Table(name="application")

public class Application implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_application")
    private Long id_application;


    private String lettreMotivation;
    private String demandeDeStage;
    @Enumerated(EnumType.STRING)
    private Etat etat;

    @ManyToOne
    private User etudiant;

    @ManyToOne
    private Offre offre;
    @ManyToOne
    private Keyword keyword;
    private String cv;

    public Application(Long id_application) {
        this.id_application = id_application;

    }
}
