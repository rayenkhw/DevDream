package tn.esprit.devdream.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Message")
public class Message implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_message")
    private Long id_message;
    private String msg;


    @OneToOne
    private User envois;

    @OneToOne
    private  User recevois;

    @ManyToOne
    private Chat chat;


}
