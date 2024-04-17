package tn.esprit.devdream.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name="Reclamation")

public class Reclamation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_Reclamation")
    private Long id_Reclamation;

    private Long id_reclamateur;
    private Long id_cible_reclamation;

    private String contenu;
    @Enumerated(EnumType.STRING)
    private  Typ_reclamation typReclamation;

    @Enumerated(EnumType.STRING)
    private Statusreclamation status_reclamation = Statusreclamation.Nontraite;

    @ManyToOne
    private User reclamateur;

    @ManyToOne
    private User cible_reclamation;

    @JsonManagedReference
    @OneToOne(mappedBy = "reclamation")
    private Reponse reponse;

    // @JsonIgnore
    //@JsonManagedReference
    //@OneToMany(mappedBy = "reclamation")
    //private List<Questionnaire> questionnaireList;


}
