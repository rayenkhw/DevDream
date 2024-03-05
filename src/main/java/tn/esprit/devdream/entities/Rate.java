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

<<<<<<< HEAD
    private Integer nb_etoiles;
=======
    private Integer Nb_etoiles;
>>>>>>> origin/ranimback
    private Offre offre;


    @ManyToOne
<<<<<<< HEAD
    @JoinColumn(name = "id_offre", insertable = false, updatable = false)
    public Offre getOffre(){

        return offre;
    }

=======
    @JoinColumn(name = "id_offre", referencedColumnName = "id_offre",insertable = false, updatable = false)
    public Offre getOffre(){
        return offre;
    }
>>>>>>> origin/ranimback
    public void setOffre(Offre offre){
    this.offre = offre;

    }

    private Competance competance;
    @ManyToOne
<<<<<<< HEAD
    @JoinColumn(name = "Id_competance", insertable = false, updatable = false)
=======
    @JoinColumn(name = "id_competance", referencedColumnName = "id_competance",insertable = false, updatable = false)
>>>>>>> origin/ranimback
    public Competance getCompetance(){

        return competance;
    }

<<<<<<< HEAD
    public void setCompetance(Competance competance){
        this.competance = competance;

    }
=======

>>>>>>> origin/ranimback


}

