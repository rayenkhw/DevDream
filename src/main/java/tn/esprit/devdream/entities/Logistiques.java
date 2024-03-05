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
@Table(name="Logistiques")
public class Logistiques implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name="id_logistics")
    private Long id_logistics;
=======
    @Column(name="Id_logistics")
    private Long Id_logistics;
>>>>>>> origin/ranimback

    private int chair;
    private int tableCount;
    private int classNb;

    private String accessory;

    @OneToOne
    private Event event;



}
