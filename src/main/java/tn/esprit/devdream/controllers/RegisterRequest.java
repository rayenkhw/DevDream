package tn.esprit.devdream.controllers;




import lombok.*;
import tn.esprit.devdream.entities.Niveau;
import tn.esprit.devdream.entities.Role;
import tn.esprit.devdream.entities.Specialte;
@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String identifiant;
    private String nom;
    private String prenom;
    private String cin;
    private String email;
    private String password;
    private Niveau niveau;
    private Specialte specialite;
    private Role role;
    private int disponibilite;
    private String image;
    private String chargeTravail;
}