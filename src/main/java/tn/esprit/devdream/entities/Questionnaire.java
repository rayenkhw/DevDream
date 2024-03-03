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
@Table(name="Questionnaire")

public class Questionnaire implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_Questionnaire")
    private Long id_Questionnaire;
    //etudiant
    private String Probleme;
    @Temporal(TemporalType.DATE)
    private Date date_prob;
    private String eval_communication;
    private String solution_propose;
    private String relation;
    private String ameliorer;
    private String suggestion;
    private String commentaire;

    private Long id_user1;

    private Long id_user2;

    @ManyToOne
    private Reclamation reclamation;


}
