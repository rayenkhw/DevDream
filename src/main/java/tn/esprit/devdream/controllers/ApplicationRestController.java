package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Depot;
import tn.esprit.devdream.repositories.ApplicationRepository;
import tn.esprit.devdream.services.IApplicationService;

import java.util.List;

@RestController
@RequestMapping("/application")
public class ApplicationRestController {
    IApplicationService applicationService;

    @Autowired
    ApplicationRepository applicationRepository;

    @GetMapping("/retrieve-all-applications")
    public List<Application> getApplications() {
        List<Application> listApplications = applicationService.retrieveAllApplications();
        return listApplications;
    }

    @GetMapping("/retrieve-application/{application-id}")
    public Application retrieveApplication(@PathVariable("application-id") Long applicationId) {
        Application application = applicationService.retrieveApplication(applicationId);
        return application;
    }

    @PostMapping("/add-application")
    public Application addApplication(@RequestBody Application c) {
        Application application = applicationService.addApplication(c);
        return application;
    }

    @DeleteMapping("/remove-application/{application-id}")
    public void removeApplication(@PathVariable("application-id") Long applicationId) {
        applicationService.removeApplication(applicationId);
    }

    @PutMapping("/modify-application")
    public Application modifyApplication(@RequestBody Application c) {
        Application application = applicationService.modifyApplication(c);
        return application;
    }

    @PutMapping("/accepterApplication/{application-id}")
    public Depot accepterApplication(@PathVariable("application-id") Long applicationId){

        Application application = applicationRepository.findApplicationById_application(applicationId);
        Depot depot = applicationService.applicationaccept(application);

        return depot ;
    }

}