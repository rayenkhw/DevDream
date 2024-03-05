package tn.esprit.devdream.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.devdream.entities.Application;
import tn.esprit.devdream.entities.Depot;
import tn.esprit.devdream.repositories.ApplicationRepository;
import tn.esprit.devdream.services.IApplicationService;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/application")
public class ApplicationRestController {

    @Autowired
=======

import java.util.List;

@RestController
@RequestMapping("/application")
public class ApplicationRestController {
>>>>>>> origin/ranimback
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

<<<<<<< HEAD

=======
>>>>>>> origin/ranimback
    @PostMapping("/add-application")
    public Application addApplication(@RequestBody Application c) {
        Application application = applicationService.addApplication(c);
        return application;
    }

<<<<<<< HEAD

=======
>>>>>>> origin/ranimback
    @DeleteMapping("/remove-application/{application-id}")
    public void removeApplication(@PathVariable("application-id") Long applicationId) {
        applicationService.removeApplication(applicationId);
    }

<<<<<<< HEAD

=======
>>>>>>> origin/ranimback
    @PutMapping("/modify-application")
    public Application modifyApplication(@RequestBody Application c) {
        Application application = applicationService.modifyApplication(c);
        return application;
    }

    @PutMapping("/accepterApplication/{application-id}")
<<<<<<< HEAD
    public Depot accepterApplication(@PathVariable("application-id") Long applicationId) {
        try {
            System.out.println("Received applicationId: " + applicationId);

            Application application = applicationRepository.findApplicationById_application(applicationId);
            if (application == null) {
                System.out.println("Application not found for id: " + applicationId);
                // Return appropriate response or throw exception
                // For example: return ResponseEntity.notFound().build();
            }

            Depot depot = applicationService.applicationaccept(application);
            return depot;
        } catch (Exception e) {
            System.err.println("Error accepting application: " + e.getMessage());
            e.printStackTrace();
            // Handle the error appropriately
            // For example: return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return null;
    }

    private static final String uploadDir = "C:\\Users\\saidi\\Desktop\\ez";



    @PostMapping("/upload")
    public String upload(@RequestParam("file") MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            return "Please select a file to upload";
        }

        // Save the file to the server
        String fileName = file.getOriginalFilename();
        String filePath = uploadDir + File.separator + fileName;
        Files.write(Paths.get(filePath), file.getBytes());

        // Return the file path
        return filePath;
    }




    @PutMapping("/refuserApplication/{application-id}")
    public void applicationrefuser(@PathVariable("application-id") Long applicationId) {
        try {
            System.out.println("Received applicationId: " + applicationId);

            Application application = applicationRepository.findApplicationById_application(applicationId);
            if (application == null) {
                System.out.println("Application not found for id: " + applicationId);
                // Return appropriate response or throw exception
                // For example: return ResponseEntity.notFound().build();
            }

            applicationService.applicationrefuser(application);

        } catch (Exception e) {
            System.err.println("Error accepting application: " + e.getMessage());
            e.printStackTrace();
            // Handle the error appropriately
            // For example: return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }
}
=======
    public Depot accepterApplication(@PathVariable("application-id") Long applicationId){

        Application application = applicationRepository.findApplicationById_application(applicationId);
        Depot depot = applicationService.applicationaccept(application);

        return depot ;
    }

}
>>>>>>> origin/ranimback
