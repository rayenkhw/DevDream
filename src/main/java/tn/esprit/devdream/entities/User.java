package tn.esprit.devdream.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.validation.constraints.Email;
import java.util.Collection;
import java.util.List;


@Entity
@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="User")

public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long idUser;
    private String identifiant;
    private String nom;
    private String prenom;
    private String cin;
    @Email(message = "Invalid email address")
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Niveau niveau;
    @Enumerated(EnumType.STRING)
    private Specialte specialite;
    @Enumerated(EnumType.STRING)
    private Role role;
    private int disponibilite;
    private String image;
    private boolean Status;
    private String Tel;
    public int Banss  ;
    private String chargeTravail;

    @OneToMany(mappedBy = "creator")
    private List<Offre> offreList;

    @OneToMany(mappedBy = "encadrant")
    @JsonIgnore
    public List<Tache> taches_encadrant;

    @OneToMany(mappedBy = "etudiant")
    @JsonIgnore
    public List<Tache> taches_etudiant;


    @OneToMany(mappedBy = "encadrant")
            //,cascade = CascadeType.REMOVE)
    @JsonIgnore
    @JsonManagedReference
    private List<Encadrement> encadrementsEncadrant;

    @OneToMany(mappedBy = "etudiant")
            //,cascade =  CascadeType.REMOVE)
    @JsonIgnore
    @JsonManagedReference
    private List<Encadrement> encadrementsEtudiant;


    @JsonIgnore
    @OneToMany(mappedBy = "from")
    private List<Message> msgenv;



    @OneToMany(mappedBy = "posteur")
    private List<Post> posts;

    @OneToMany(mappedBy = "reclamateur")
    @JsonIgnore
    private List<Reclamation> reclamations;

    @OneToMany(mappedBy = "cible_reclamation")
    @JsonIgnore
    private List<Reclamation> reclamations_recu;

    @OneToMany(mappedBy = "etudiant")
    private List<Application> applicationList;

    @OneToMany(mappedBy = "etudiant")
    private List<Depot> depotList;




    private List<Interaction> interactions;
    @OneToMany(mappedBy = "user")
    public List<Interaction> getInteractions(){


        return interactions;
    }
    public void setInteractions(List<Interaction> interactions){

        this.interactions=interactions;
    }



    private List<CommentairePost> commentairePostList;
    @OneToMany(mappedBy = "user")
    public List<CommentairePost> getCommentairePostList(){


        return commentairePostList;
    }
    public void setCommentairePostList(List<CommentairePost> commentairePostList){

        this.commentairePostList=commentairePostList;
    }



    private List<Evaluation> evaluations;
    @OneToMany(mappedBy = "user")
    public List<Evaluation> getEvaluations(){


        return evaluations;
    }
    public void setEvaluations(List<Evaluation> evaluations){

        this.evaluations=evaluations;
    }

    @OneToMany(mappedBy = "organisateur")
    private List<Event> eventList;

    @ManyToMany(mappedBy = "participantslist")
    private List<Event> participantsEventList;

    @OneToMany(mappedBy = "createur_formation")
    private List<Formation> formationscreee; //chkoun 3mal el formation

    @ManyToMany(mappedBy = "participantsList")
    private List<Formation> participations_formations; //lista mta3 anehom les formation elli el user hatha charek fehom

/*
    @OneToMany(mappedBy = "encadreur")
    private List<Encadrement> encadrementList;

    @ManyToOne
    private Encadrement encadrement;*/

    @JsonIgnore
    @OneToMany(mappedBy = "user1")
    private List<Chat> chat1;

    @JsonIgnore
    @OneToMany(mappedBy = "user2")
    private List<Chat> chat2;


    @OneToMany(mappedBy = "user")
    private List<Keyword> keywordList;
    @OneToOne
    private Stage stage;

    @OneToMany(mappedBy = "maitrestage")
    private  List<Stage> stageList;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


}

