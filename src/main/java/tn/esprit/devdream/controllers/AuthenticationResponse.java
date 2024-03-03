package com.example.DevTeam.Controllers;


import com.example.DevTeam.Entities.Role;
import com.example.DevTeam.Entities.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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




