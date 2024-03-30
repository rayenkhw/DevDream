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
@Table(name="Rate")
public class Rate implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_rate")
    private Long id_rate;

    private Integer Nb_etoiles;
    private Offre offre;


    @ManyToOne
    @JoinColumn(name = "id_offre", referencedColumnName = "id_offre",insertable = false, updatable = false)
    public Offre getOffre(){
        return offre;
    }
    public void setOffre(Offre offre){
        this.offre = offre;

    }

    private Competance competance;
    @ManyToOne
    @JoinColumn(name = "id_competance", referencedColumnName = "id_competance",insertable = false, updatable = false)
    public Competance getCompetance(){

        return competance;
    }




}

