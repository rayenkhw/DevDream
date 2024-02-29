package com.example.DevTeam.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="SessionEvent")
public class SessionEvent implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idSessionEvent")
    private int idSessionEvent;

    @Temporal(TemporalType.DATE)
    private Date sessionStarting;
    @Temporal(TemporalType.DATE)
    private Date sessionEnd;

    @ManyToOne
    private Event event;

}