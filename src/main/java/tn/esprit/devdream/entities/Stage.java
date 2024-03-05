package tn.esprit.devdream.entities;

<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonIgnore;
=======
>>>>>>> origin/ranimback
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
@Table(name="Stage")

public class Stage implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_stage")
    private Long id_stage;

<<<<<<< HEAD

    @ManyToOne
    private User maitrestage;

    @Temporal(TemporalType.DATE)
    private Date date_debut;
    @Temporal(TemporalType.DATE)
    private Date date_fin;

    @OneToMany(mappedBy = "stage")

    private List<Pointage> pointages;

    @ManyToOne

    private Offre offre;

    @OneToOne(mappedBy = "stage")
    @JsonIgnore
    private Depot depot;

    @JsonIgnore
    private List<Evaluation> evaluations;
    @OneToMany(mappedBy = "stage")
    @JsonIgnore
=======
    @Temporal(TemporalType.DATE)
    private Date Date_debut;
    @Temporal(TemporalType.DATE)
    private Date Date_fin;

    @OneToMany(mappedBy = "stage")
    private List<Pointage> pointages;

    @ManyToOne
    private Offre offre;

    @OneToOne(mappedBy = "stage")
    private Depot depot;

    private List<Evaluation> evaluations;
    @OneToMany(mappedBy = "stage")
>>>>>>> origin/ranimback
    public List<Evaluation> getEvaluations(){


        return evaluations;
    }
<<<<<<< HEAD
    @JsonIgnore
=======
>>>>>>> origin/ranimback
    public void setEvaluations(List<Evaluation> evaluations){

        this.evaluations=evaluations;
    }

<<<<<<< HEAD
    @OneToOne(mappedBy = "stage")

    private User stagiere;

=======
    public void setStagiere(User etudiant) {
    }

    public void setMaitrestage(User creator) {
    }
>>>>>>> origin/ranimback
}
