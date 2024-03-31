package tn.esprit.devdream.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor

@Table(name="offre")

public class Offre implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_offre")
    private Long id_offre;
    private String titre;
    private String skills;
    private String duree;
    private String description;
    private String keywords;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_ajout", updatable = false)
    private Date dateAjout;
    private double latitude;
    private double longitude;
    private String nomVille;
    private String adresse;

    private String gouvernorat;
    private String ville;
    @ManyToOne
    private User creator;


    @OneToMany(mappedBy = "offre")
    private List<Application> applicationList;

    @OneToMany(mappedBy = "offre")
    private List<Stage> stageList;

    private List<Rate> rates;
    @OneToMany(mappedBy = "offre")
    public List<Rate> getRates(){

        return rates;
    }
    public void setRates(List<Rate> rates){

        this.rates=rates;
    }

    public Offre() {
    }

    public Offre(Long id_offre, String titre, String skills, String duree, String description, String keywords, double latitude, double longitude, String nomVille, String adresse, String pays) {
        this.id_offre = id_offre;
        this.titre = titre;
        this.skills = skills;
        this.duree = duree;
        this.description = description;
        this.keywords = keywords;
        this.latitude = latitude;
        this.longitude = longitude;
        this.nomVille = nomVille;
        this.adresse = adresse;

    }

    public Long getId_offre() {
        return id_offre;
    }

    public void setId_offre(Long id_offre) {
        this.id_offre = id_offre;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getDuree() {
        return duree;
    }

    public void setDuree(String duree) {
        this.duree = duree;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getNomVille() {
        return nomVille;
    }

    public void setNomVille(String nomVille) {
        this.nomVille = nomVille;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }


}