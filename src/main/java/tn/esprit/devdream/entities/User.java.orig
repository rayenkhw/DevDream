package tn.esprit.devdream.entities;

<<<<<<< HEAD
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="User")

public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
=======


import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
@Getter
@Setter
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User implements UserDetails
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long idUser;
>>>>>>> origin/ranimback
    private String identifiant;
    private String nom;
    private String prenom;
    private String cin;
<<<<<<< HEAD
    @Email(message = "Invalid email address")
    private String email;
    private String mdp;
    @Enumerated(EnumType.STRING)
    private Niveau niveau;
    @Enumerated(EnumType.STRING)
    private Specialte specialite;
    @Enumerated(EnumType.STRING)
    private Role rolee;
    private Boolean disponibilite;
    private String image;
    private String chargeTravail;
=======
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    @Enumerated(EnumType.STRING)
    private Niveau Niveau;
    @Enumerated(EnumType.STRING)
    private Specialte Specialite;
    private int disponibilite;
    private String Image;
    private String chargeTravail;
    private boolean Status;
    private String Tel;



>>>>>>> origin/ranimback

    @OneToMany(mappedBy = "creator")
    private List<Offre> offreList;

    @OneToMany(mappedBy = "encadrant")
    public List<Tache> taches_encadrant;

    @OneToMany(mappedBy = "etudiant")
    public List<Tache> taches_etudiant;

<<<<<<< HEAD


=======
>>>>>>> origin/ranimback
    @OneToOne(mappedBy = "envois")
    private Message msgenv;

    @OneToOne(mappedBy = "recevois")
    private Message msgrecu;

    @OneToMany(mappedBy = "posteur")
    private List<Post> posts;

    @OneToMany(mappedBy = "reclamateur")
    private List<Reclamation> reclamations;

    @OneToMany(mappedBy = "cible_reclamation")
    private List<Reclamation> reclamations_recu;
    @OneToMany(mappedBy = "etudiant")
    private List<Application> applicationList;

    @OneToMany(mappedBy = "etudiant")
    private List<Depot> depotList;

<<<<<<< HEAD



    private List<Interaction> interactions;
    @OneToMany(mappedBy = "user")
    public List<Interaction> getInteractions(){


        return interactions;
    }
    public void setInteractions(List<Interaction> interactions){

=======
    private List<Interaction> interactions;
    @OneToMany(mappedBy = "user")
    public List<Interaction> getInteractions(){
        return interactions;
    }
    public void setInteractions(List<Interaction> interactions){
>>>>>>> origin/ranimback
        this.interactions=interactions;
    }


<<<<<<< HEAD

    private List<CommentairePost> commentairePostList;
    @OneToMany(mappedBy = "user")
    public List<CommentairePost> getCommentairePostList(){


=======
    private List<CommentairePost> commentairePostList;
    @OneToMany(mappedBy = "user")
    public List<CommentairePost> getCommentairePostList(){
>>>>>>> origin/ranimback
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

<<<<<<< HEAD
/*
    @OneToMany(mappedBy = "encadreur")
    private List<Encadrement> encadrementList;

    @ManyToOne
    private Encadrement encadrement;*/
=======
    /*
        @OneToMany(mappedBy = "encadreur")
        private List<Encadrement> encadrementList;

        @ManyToOne
        private Encadrement encadrement;*/
>>>>>>> origin/ranimback
    @OneToMany(mappedBy = "encadrant")
    private List<Encadrement> encadrementsEncadrant;

    @OneToMany(mappedBy = "etudiant")
    private List<Encadrement> encadrementsEtudiant;



<<<<<<< HEAD
    @OneToMany(mappedBy = "user")
    private List<Keyword> keywordList;
    @OneToOne
    private Stage stage;

    @OneToMany(mappedBy = "maitrestage")
    private  List<Stage> stageList;
}

=======




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
>>>>>>> origin/ranimback
