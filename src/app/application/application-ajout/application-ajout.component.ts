// src/main/resources/static/js/app/components/application-ajout/application-ajout.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../application.model';

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
  uploadPercent: number;
  uploadedFiles: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onFileSelected(event: Event, fileType: string): void {
    const target = event.target as HTMLInputElement;
    const file = target.files[0];

    switch (fileType) {
      case 'lettreMotivation':
        this.lettreMotivation = file;
        break;
      case 'demandeDeStage':
        this.demandeDeStage = file;
        break;
      case 'cv':
        this.cv = file;
        break;
      default:
        break;
    }

    if (file) {
      this.uploadFile(file, fileType);
    }
  }

  uploadFile(file: File, fileType: string): void {
    const formData = new FormData();
    formData.append('file', file, file.name);
  
    this.http
      .post<{ fileName: string }>(
        'http://localhost:9100/DevDream/application/upload',
        formData,
        {
          reportProgress: true,
          observe: 'events'
        }
      )
      .subscribe((event: HttpEvent<{ fileName: string }>) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadPercent = Math.round((event.loaded / event.total) * 100);
        } else if (event.type === HttpEventType.Response) {
          this.uploadedFiles.push(event.body.fileName);
          if (this.uploadedFiles.length === 3) {
            this.sendApplication();
          }
        }
      });
  }

  sendApplication(): void {
    const application = {
      lettreMotivation: this.uploadedFiles[0],
      demandeDeStage: this.uploadedFiles[1],
      cv: this.uploadedFiles[2]
    };

    this.http.post<Application>(
      'http://localhost:9100/DevDream/application/add-application',
      application
    ).subscribe(response => {
      console.log('Application added:', response);
      // Handle the response here
    });
  }
}