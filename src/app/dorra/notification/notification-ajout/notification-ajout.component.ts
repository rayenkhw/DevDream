import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification.module';

@Component({
  selector: 'app-notification-ajout',
  templateUrl: './notification-ajout.component.html',
  styleUrls: ['./notification-ajout.component.css']
})
export class NotificationAjoutComponent implements OnInit {

  newNotificationn: Notification = new Notification();
  
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.notificationService.addNotification(this.newNotificationn).subscribe(
      (response) => {
        console.log('Reclamation added successfully:', response);
        // You can add further logic here, such as redirecting to a different page.
      },
      (error) => {
        console.error('Error adding reclamation:', error);
        // Handle the error as needed.
      }
    );
  }

}

