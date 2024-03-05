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
@Table(name="Competance")
public class Competance implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name="id_competance")
    private Long id_competance;

    @ElementCollection
    private List<String> languages;

=======
    @Column(name="Id_competance")
    private Long id_competance;
        private String langages;

    @ElementCollection
    private List<String> languages;
>>>>>>> origin/ranimback
    private List<Rate> rates;
    @OneToMany(mappedBy = "competance")
    public List<Rate> getRates(){


        return rates;
    }
    public void setRates(List<Rate> rates){

        this.rates=rates;
    }

}
