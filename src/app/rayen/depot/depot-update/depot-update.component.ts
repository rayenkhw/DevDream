import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Depot } from '../depot.module';

@Component({
  selector: 'app-depot-update',
  templateUrl: './depot-update.component.html',
  styleUrls: ['./depot-update.component.css']
})
export class DepotUpdateComponent implements OnInit {
  id_depot: number;
  travailpath: string;
  rapportpath: string;
  journalpath: string;

  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.id_depot = +this.route.snapshot.paramMap.get('id_depot');
  }

  uploadFile(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post('http://localhost:9000/DevDream/application/upload', formData, {
      reportProgress: true,
      observe: 'response',
      responseType: 'text' // Ensure the responseType is set to 'text'
    }).pipe(
      map(response => response.body as string) // Extract the string directly from the response body
    );
  }

  onFileSelected(event: Event, fileType: string): void {
    const target = event.target as HTMLInputElement;
    const file = target.files[0];

    switch (fileType) {
      case 'travail':
        this.uploadFile(file).subscribe({
          next: (filePath: string) => {
            this.travailpath = filePath;
            console.log(filePath);

          },
          error: (error) => {
            console.error('Error fichier travail', error);
          },
          complete: () => {
            // You can add any code to be executed when the observable completes here.
          },
        });
        break;
      case 'rapportDeStage':
        
          this.uploadFile(file).subscribe({
            next: (filePath: string) => {
              this.rapportpath = filePath;
              console.log(filePath);
  
            },
            error: (error) => {
              console.error('Error fichier rapportdestage', error);
            },
            complete: () => {
              // You can add any code to be executed when the observable completes here.
            },
          });
        break;
      case 'journalDeStage':
        this.uploadFile(file).subscribe({
          next: (filePath: string) => {
            this.journalpath= filePath;
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
      default: console.error('Unhandled fileType:', fileType);
        break;
    }

  }
  sendDepot(): void {
    const depot = {
      id_depot: this.id_depot,
      travail: this.travailpath,
      rapportDeStage: this.rapportpath,
      journalDeStage: this.journalpath,
      date_depot: new Date()
    };

    this.http.put<Depot>(
      'http://localhost:9000/DevDream/depot/modify-depot',
      depot
    ).subscribe(response => {
      console.log('depot modified:', response);
      // Handle the response here
    });
    this.router.navigate(['/user/affichage-depots']);
  }

}
