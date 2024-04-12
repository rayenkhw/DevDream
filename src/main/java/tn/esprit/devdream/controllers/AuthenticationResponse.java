package tn.esprit.devdream.controllers;



import lombok.*;
import tn.esprit.devdream.entities.Role;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AuthenticationResponse {
    String token;
    private long idUser;
    private String identifiant;
    private String nom;
    private String prenom;
    private String image;
    private String email;
    private String password;
    private Role role;

    private int disponibilite;

}




