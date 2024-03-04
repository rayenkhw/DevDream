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
@Table(name="Reclamation")

public class Reclamation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_Reclamation")
    private Long id_Reclamation;

    //private Long Id_reclamateur;
    //private Long Id_cible_reclamation;

    private String Contenu;
    @Enumerated(EnumType.STRING)
    private  Typ_reclamation typReclamation;

    private Boolean status_reclamation = Boolean.FALSE;

    @ManyToOne
    private User reclamateur;

    @ManyToOne
    private User cible_reclamation;

    @OneToMany(mappedBy = "reclamation")
    private List<Questionnaire> questionnaireList;

    @OneToOne(mappedBy = "reclamation")
    private Reponse reponse;
}
