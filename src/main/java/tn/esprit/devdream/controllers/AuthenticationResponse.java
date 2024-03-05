package tn.esprit.devdream.controllers;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tn.esprit.devdream.entities.Role;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
    private Boolean disponibilite;

}
