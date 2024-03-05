package tn.esprit.devdream.entities;

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
@Table(name="offre")

public class Offre implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_offre")
    private Long id_offre;
    private String titre;
    private String skills;
<<<<<<< HEAD
    private String Duree;
    private String Description;
=======
    private String duree;
    private String description;
    private String keywords;
>>>>>>> origin/ranimback
    @ManyToOne
    private User creator;


    @OneToMany(mappedBy = "offre")
    private List<Application> applicationList;

    @OneToMany(mappedBy = "offre")
    private List<Stage> stageList;

<<<<<<< HEAD


=======
>>>>>>> origin/ranimback
    private List<Rate> rates;
    @OneToMany(mappedBy = "offre")
    public List<Rate> getRates(){

<<<<<<< HEAD

=======
>>>>>>> origin/ranimback
        return rates;
    }
    public void setRates(List<Rate> rates){

        this.rates=rates;
    }

}