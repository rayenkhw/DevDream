package tn.esprit.devdream.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Event")
public class Event implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id_event")
    private Long Id_event;
    @NotEmpty
    private String eventName;
    @NotEmpty
    private String description;
    @Temporal(TemporalType.DATE)
    @NotEmpty
    @Future
    private Date eventStart;
    @Temporal(TemporalType.DATE)
    @NotEmpty
    @Future
    private Date eventEnd;
    private float budget;
    private String poster;
    private int nbrParticipant;
    @OneToOne(mappedBy = "event" , cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Logistiques logistiques;
    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<SessionEvent> sessionEventList;
    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<OCTeam> ocTeamList;
    @ManyToOne( fetch = FetchType.EAGER)
    private User organisateur;
    @ManyToMany( fetch = FetchType.EAGER)
    private List<User> participantslist;
}
