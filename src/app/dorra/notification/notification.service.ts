import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from './notification.module';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  private apiURL = 'http://localhost:9000/DevDream/notification';

  constructor(private http: HttpClient) { }
  addNotification(notification: Notification): Observable<Notification> {

    return this.http.post<Notification>("http://localhost:9000/DevDream/notification/add-notification", notification);
  }
  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>("http://localhost:9000/DevDream/notification/retrieve-all-notifications");
  }

}
