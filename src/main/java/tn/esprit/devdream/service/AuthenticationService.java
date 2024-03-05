package tn.esprit.devdream.service;

import tn.esprit.devdream.entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.controllers.AuthenticationRequest;
import tn.esprit.devdream.controllers.AuthenticationResponse;
import tn.esprit.devdream.repositories.UserRepository;
import tn.esprit.devdream.controllers.RegisterRequest;
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
                .Nom(request.getNom())
                .Prenom(request.getPrenom()).
                email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .cin(request.getCin())
                .Specialite(request.getSpecialite())
                .Niveau(request.getNiveau())
                .role(request.getRole())
                .chargeTravail(request.getChargeTravail())
                .disponibilite(request.getDisponibilite())
                .identifiant(request.getIdentifiant())
                .Image(request.getImage())
                .build();
        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        // var refreshToken = jwtService.generateRefreshToken(user);
        // saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .identifiant(savedUser.getIdentifiant())
                .nom(savedUser.getNom())
                .prenom(savedUser.getPrenom())
                .image(savedUser.getImage())
                .email(savedUser.getEmail())
                .password(savedUser.getPassword())
                .role(savedUser.getRole())
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