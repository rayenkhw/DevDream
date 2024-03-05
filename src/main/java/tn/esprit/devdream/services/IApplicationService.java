package tn.esprit.devdream.services;

import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Depot;

import java.util.List;

public interface IApplicationService {
    public List<Application> retrieveAllApplications();
    public Application retrieveApplication(Long id);
    public Application addApplication(Application c);
    public void removeApplication(Long id);
    public Application modifyApplication(Application Application);

    public Depot applicationaccept(Application application);
<<<<<<< HEAD

    public void  applicationrefuser(Application application);
=======
>>>>>>> origin/ranimback
}