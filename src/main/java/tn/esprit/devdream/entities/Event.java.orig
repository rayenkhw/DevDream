package tn.esprit.devdream.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Event")
public class Event implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name="id_event")
    private Long id_event;
=======
    @Column(name="Id_event")
    private Long Id_event;
>>>>>>> origin/ranimback


    private String eventName;
    private String description;
    @Temporal(TemporalType.DATE)
    private Date eventStart;
    @Temporal(TemporalType.DATE)
    private Date eventEnd;
    private float budget;
    private String feedback;
    private String poster;

    @OneToOne(mappedBy = "event")
    private Logistiques logistiques;

    @OneToMany(mappedBy = "event")
    private List<SessionEvent> sessionEventList;

    @OneToMany(mappedBy = "event")
    private List<OCTeam> ocTeamList;

    @ManyToOne
    private User organisateur;

    @ManyToMany
    private List<User> participantslist;

}
