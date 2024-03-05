package tn.esprit.devdream.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="OCTeam")
public class OCTeam implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_OC")
    private int id_OC;

<<<<<<< HEAD
    private String oCRole;
    private String oCnames;
=======
    private String OCRole;
    private String OCnames;
>>>>>>> origin/ranimback

    @ManyToOne
    private Event event;


}