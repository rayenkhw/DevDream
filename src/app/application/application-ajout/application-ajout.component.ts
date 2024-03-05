// src/main/resources/static/js/app/components/application-ajout/application-ajout.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../application.model';
import { map } from 'rxjs/operators'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-ajout',
  templateUrl: './application-ajout.component.html',
  styleUrls: ['./application-ajout.component.css']
})
// src/main/resources/static/js/app/components/application-ajout/application-ajout.component.ts
// ...

export class ApplicationAjoutComponent implements OnInit {
  lettreMotivation: File;
  demandeDeStage: File;
  cv: File;
  lettremotivationpath: string;
  demandeDeStagepath: string;
  cvpath: string;
  uploadPercent: number;
  uploadedFiles: string[] = [];

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {}

  onFileSelected(event: Event, fileType: string): void {
    const target = event.target as HTMLInputElement;
    const file = target.files[0];

    switch (fileType) {
      case 'lettreMotivation':
        this.uploadFile(file).subscribe({
          next: (filePath: string) => {
            this.lettremotivationpath = filePath;
            console.log(filePath);

          },
          error: (error) => {
            console.error('Error fichier lettre motivation', error);
          },
          complete: () => {
            // You can add any code to be executed when the observable completes here.
          },
        });
        break;
      case 'demandeDeStage':
        
          this.uploadFile(file).subscribe({
            next: (filePath: string) => {
              this.demandeDeStagepath = filePath;
              console.log(filePath);
  
            },
            error: (error) => {
              console.error('Error fichier demandeDeStage', error);
            },
            complete: () => {
              // You can add any code to be executed when the observable completes here.
            },
          });
        break;
      case 'cv':
        this.uploadFile(file).subscribe({
          next: (filePath: string) => {
            this.cvpath= filePath;
            console.log(filePath);

          },
          error: (error) => {
            console.error('Error fichier cv', error);
          },
          complete: () => {
            // You can add any code to be executed when the observable completes here.
          },
        });
        break;
      default: console.error('7atta ficher maye5dem');
        break;
    }

  }

  uploadFile(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post('http://localhost:9100/DevDream/application/upload', formData, {
      reportProgress: true,
      observe: 'response',
      responseType: 'text' // Ensure the responseType is set to 'text'
    }).pipe(
      map(response => response.body as string) // Extract the string directly from the response body
    );
  }

  sendApplication(): void {
    const application = {
      lettreMotivation: this.lettremotivationpath,
      demandeDeStage: this.demandeDeStagepath,
      cv: this.cvpath
    };

    this.http.post<Application>(
      'http://localhost:9100/DevDream/application/add-application',
      application
    ).subscribe(response => {
      console.log('Application added:', response);
      // Handle the response here
    });
    this.router.navigate(['/admin/list-applications-admin']);
  }
}