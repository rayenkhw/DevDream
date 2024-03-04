package tn.esprit.devdream.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Evaluation")

public class Evaluation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_evaluation")
    private Long id_evaluation;
    @Temporal(TemporalType.DATE)
    private Date date_ev;
    private String type;
    private String note;

    private User user;
    @ManyToOne
    @JoinColumn(name = "id", insertable = false, updatable = false)
    public User getUser(){



        return user;
    }
    public void setUser(User user){



        this.user = user;
    }

    private Stage stage;
    @ManyToOne
    @JoinColumn(name = "id_stage", insertable = false, updatable = false)
    public Stage getStage(){



        return stage;
    }
    public void setStage(Stage stage){



        this.stage = stage;
    }



}
