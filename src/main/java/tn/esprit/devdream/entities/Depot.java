package tn.esprit.devdream.entities;

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
    private String travail;
    private String rapportDeStage;
    private String journalDeStage;
    @Temporal(TemporalType.DATE)
    private Date date_depot;

    @OneToOne
    private Stage stage;

    @ManyToOne
    private User etudiant;
}
