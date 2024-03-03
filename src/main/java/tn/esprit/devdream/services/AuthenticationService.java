package com.example.DevTeam.Services;


import com.example.DevTeam.Controllers.AuthenticationRequest;
import com.example.DevTeam.Controllers.AuthenticationResponse;
import com.example.DevTeam.Controllers.RegisterRequest;
import com.example.DevTeam.Entities.User;
import com.example.DevTeam.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final UserRepository repository;
    //private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;


    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .Nom(request.getFirstname())
                .Prenom(request.getLastname()).
                email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();
        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        // var refreshToken = jwtService.generateRefreshToken(user);
        // saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
//        User user1 = new User();
//        user1.setIdUser(user.getIdUser());
//        user1.setIdentifiant(user.getIdentifiant());
//        user1.setNom(user.getNom());
//        user1.setPrenom(user.getPrenom());
//        user1.setEmail(user.getEmail());
//        user1.setPassword(user.getPassword());
//        user1.setRole(user.getRole());
//        user1.setDisponibilite(user.getDisponibilite());


        return AuthenticationResponse.builder()
                .token(jwtToken)
                .idUser(user.getIdUser())
                .identifiant(user.getIdentifiant())
                .nom(user.getNom())
                .prenom(user.getPrenom())
                .image(user.getImage())
                .email(user.getEmail())
                .password(user.getPassword())
                .role(user.getRole())
                .disponibilite(user.getDisponibilite())
                .build();

    }

//    public AuthenticationResponse authenticate(AuthenticationRequest request) {
//
//
//
//
//
//            /
//            return AuthenticationResponse.builder()
//                    .token(jwtToken)
//                    .idUser(user.getIdUser())
//                    .nom(user.getNom())
//                    .prenom(user.getPrenom())
//                    .image(user.getImage())
//                    .email(user.getEmail())
//                    .password(user.getPassword())
//                    .rolee(user.getRolee())
//                    .status(user.isStatus())
//                    .tel(user.getTel())
//                    .build();
//        } catch (AuthenticationException ex) {
//            // Handle authentication failure
//            throw new UsernameNotFoundException("Incorrect email or password");
//        }
//    }
}