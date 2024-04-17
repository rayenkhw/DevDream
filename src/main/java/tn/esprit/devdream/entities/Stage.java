package tn.esprit.devdream.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    public List<Evaluation> getEvaluations(){


        return evaluations;
    }
    @JsonIgnore
    public void setEvaluations(List<Evaluation> evaluations){

        this.evaluations=evaluations;
    }

    @OneToOne(mappedBy = "stage")

    private User stagiere;

}
