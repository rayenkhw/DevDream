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
@Table(name="pointage")

public class Pointage implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_pointage")
    private Long id_pointage;
    @Temporal(TemporalType.DATE)
    private Date date_arrivee;
    @Temporal(TemporalType.DATE)
    private Date date_sortie;
    private Integer nb_abs;

    @ManyToOne
    private Stage stage;

}
