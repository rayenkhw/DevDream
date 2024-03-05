import { Component, OnInit } from '@angular/core';
import { Application } from '../application.model';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications: Application[] = [];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.applicationService.getAllApplications().subscribe(
      (data: Application[]) => {
        this.applications = data;
      },
      error => {
        console.log('Error fetching applications:', error);
      }
    );
  }
  acceptApplication(applicationId: number) {
    this.applicationService.acceptApplication(applicationId).subscribe(
      () => {
        console.log('Application accepted successfully');
        window.location.reload();
      },
      error => {
        console.error('Error accepting application:', error);
      }
    );
  }

  refuserApplication(applicationId: number) {
    this.applicationService.refuserApplication(applicationId).subscribe(
      () => {
        console.log('Application accepted successfully');
        window.location.reload();
      },
      error => {
        console.error('Error accepting application:', error);
      }
    );
  }
  
}
