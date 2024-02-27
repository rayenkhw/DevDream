package com.example.DevTeam.Controllers;


import org.springframework.security.access.prepost.PreAuthorize;


@PreAuthorize("hasRole('Esprit') ")
public class UserControllers {
}
