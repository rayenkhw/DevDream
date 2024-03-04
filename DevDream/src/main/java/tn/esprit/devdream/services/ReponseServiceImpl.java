package tn.esprit.devdream.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.devdream.entities.Notification;
import tn.esprit.devdream.repositories.INotificationRepository;
import tn.esprit.devdream.entities.Reponse;
import tn.esprit.devdream.repositories.IReponseRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ReponseServiceImpl implements IReponseService{
    @Autowired
    IReponseRepository iReponseRepository;
    @Autowired
    INotificationRepository notificationRepository;

    @Override
    public Reponse addReponse (Reponse re)
    {
        Notification notification = new Notification();
        notification.setContenu("vous avez réçu la réponse à propos votre réclamation ");
        notificationRepository.save(notification);
        return iReponseRepository.save(re);

    }

    @Override
    public Reponse modifyReponse(Reponse reponse) {
        return iReponseRepository.save(reponse);
    }

    @Override
    public List<Reponse> retrieveAllReponse() {
        return iReponseRepository.findAll();
    }

    @Override
    public Reponse retrieveReponse(Long idReponse) {
        return iReponseRepository.findById(idReponse).get();
    }



    @Override
    public void removeReponse(Long idReponse) {
        iReponseRepository.deleteById(idReponse);

    }

}
