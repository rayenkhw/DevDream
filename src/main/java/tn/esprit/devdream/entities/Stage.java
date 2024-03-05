package tn.esprit.devdream.entities;

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
    public List<Evaluation> getEvaluations(){


        return evaluations;
    }
    public void setEvaluations(List<Evaluation> evaluations){

        this.evaluations=evaluations;
    }

}
