package tn.esprit.devdream.controllers;



import lombok.*;
import tn.esprit.devdream.entities.Role;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegisterRequest {
    private String nom;
    private String prenom;
    private String email;
    private String password;
    private Role role;
}
