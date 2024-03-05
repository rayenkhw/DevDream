import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from './application.model'; // Import your application model

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:9100/DevDream/application';
  constructor(private http: HttpClient) { }
  
  
  
  getAllApplications(): Observable<Application[]> {
    return this.http.get<Application[]>('http://localhost:9100/DevDream/application/retrieve-all-applications');
  }

  

  updateApplication(application: Application): Observable<Application> {
    return this.http.put<Application>('http://localhost:9100/DevDream/application/modify-application', application);
  }

  deleteApplication(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:9100/DevDream/application/remove-application/' + id);
  }

  uploadFile(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<string>(`${this.baseUrl}/upload`, formData);
  }

  addApplication(application: Application): Observable<Application> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Application>('http://localhost:9100/DevDream/application/add-application', application, { headers });
  }

  acceptApplication(id: number): Observable<void> {
    const url = `http://localhost:9100/DevDream/application/accepterApplication/${id}`;
    return this.http.put<void>(url, {});
  }
  refuserApplication(id: number): Observable<void> {
    const url = `http://localhost:9100/DevDream/application/refuserApplication/${id}`;
    return this.http.put<void>(url, {});
  }

}
