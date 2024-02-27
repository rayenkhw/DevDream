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
@Table(name="Interaction")

public class Interaction implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_interaction")
    private Long id_interaction;

    @Enumerated(EnumType.STRING)
    private Type_interaction type_interaction;

    @ManyToOne
    @JoinColumn(name = "id_Post")
    private Post post;


    @ManyToOne
    @JoinColumn(name = "id")
    private User user;


}
