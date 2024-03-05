package tn.esprit.devdream.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.devdream.entities.Event;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends CrudRepository <Event, Integer>{
    @Query("SELECT e FROM Event e " +
            "LEFT JOIN FETCH e.sessionEventList se " +
            "LEFT JOIN FETCH e.logistiques l " +
            "LEFT JOIN FETCH e.ocTeamList o " +
            "WHERE e.Id_event = :eventId")
    Optional<Event> showEventDetails(@Param("eventId") Long eventId);

    @Query("SELECT e.Id_event, e.eventName, e.description, e.eventStart, e.eventEnd, e.budget, e.poster, COUNT(p) " +
            "FROM Event e JOIN e.participantslist p GROUP BY e.Id_event")
    List<Event> findAllEventsWithParticipantCount();
}


