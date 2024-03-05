package tn.esprit.devdream.controllers;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AuthenticationRequest {
    private String email;
    String password;
}
