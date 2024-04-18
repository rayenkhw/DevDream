package tn.esprit.devdream.services;

import com.postmarkapp.postmark.client.exception.PostmarkException;
import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Depot;

import java.io.IOException;
import java.util.List;

public interface IApplicationService {
    public List<Application> retrieveAllApplications();
    public Application retrieveApplication(Long id);
    public Application addApplication(Application c);
    public void removeApplication(Long id);
    public Application modifyApplication(Application Application);

    public Depot applicationaccept(Long id_application) throws PostmarkException, IOException;

    public void  applicationrefuser(Long id_application);
}