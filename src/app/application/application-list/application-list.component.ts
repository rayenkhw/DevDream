import { Component, OnInit } from '@angular/core';
import { Application } from '../application.model';
import { ApplicationService } from '../application.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications: Application[] = [];
  isPopupVisible: boolean = false;
  totalApplications: number = 0;
  accepted: number = 0;
  refused: number = 0;
  pending: number = 0;
  
refusedPercentage: number = 0;
refusedOffset: number = 0;
pendingPercentage: number = 0;
pendingOffset: number = 0;
acceptedPercentage: number = 0;
  acceptedOffset: number = 0;

  constructor(private applicationService: ApplicationService,private router: Router) { }

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
        this.router.navigate(['/user/list-applications']);
        console.log('Application accepted successfully');
        //window.location.reload();
      },
      error => {
        console.error('Error accepting application:', error);
      }
    );
  }

  refuserApplication(applicationId: number) {
    this.applicationService.refuserApplication(applicationId).subscribe(
      () => {
        this.router.navigate(['/user/list-applications']);
        console.log('Application refused successfully');
       // window.location.reload();
      },
      error => {
        console.error('Error accepting application:', error);
      }
    );
  }

  openFile(filepath: string): void {
    const filename = filepath.split('\\').pop().split('/').pop(); // Split by both backslash and forward slash

  // Construct the full path to the file in the assets folder
  const fullFilePath = `assets/${filename}`;

  window.open(fullFilePath, '_blank');
  }


  showStatistics(): void {
    const totalApplications = this.applications.length;
    const accepted = this.applications.filter(app => app.etat === 'Accepte').length;
    const refused = this.applications.filter(app => app.etat === 'Refuse').length;
    const pending = this.applications.filter(app => app.etat === 'Encours').length;
  
    alert(`Total: ${totalApplications}, accepté: ${accepted}, refusé: ${refused}, en cours: ${pending}`);
  }
  
  sortApplicationsByEtat(): void {
    this.applications.sort((a, b) => {
      // Define the sorting order based on the 'État' column
      const order = ['Encours', 'Accepte', 'Refuse'];
  
      // Get the index of each application's 'État' value in the order array
      const indexA = order.indexOf(a.etat);
      const indexB = order.indexOf(b.etat);
  
      // Compare the indexes to determine the sorting order
      return indexA - indexB;
    });
  }
  
  openPopup(): void {
    this.calculateStatistics();
    this.isPopupVisible = true;
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }

  calculateStatistics(): void {
    this.totalApplications = this.applications.length;
    this.accepted = this.applications.filter(app => app.etat === 'Accepte').length;
    this.refused = this.applications.filter(app => app.etat === 'Refuse').length;
    this.pending = this.applications.filter(app => app.etat === 'Encours').length;
    this.acceptedPercentage = parseFloat(((this.accepted / this.totalApplications) * 100).toFixed(1));
    this.acceptedOffset = 100 - this.acceptedPercentage;
    this.refusedPercentage = parseFloat(((this.refused / this.totalApplications) * 100).toFixed(1));
    this.refusedOffset = 100 - this.refusedPercentage;
    this.pendingPercentage = parseFloat(((this.pending / this.totalApplications) * 100).toFixed(1));
    this.pendingOffset = 100 - this.pendingPercentage;
    //alert(`Total: ${this.totalApplications}, accepté: ${this.accepted}, refusé: ${this.refused}, en cours: ${this.pending}`);
  }
  
  
}
