import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';import { HttpClient } from '@angular/common/http';
import { Reclamation } from '../reclamation.module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reclamation-ajout',
  templateUrl: './reclamation-ajout.component.html',
  styleUrls: ['./reclamation-ajout.component.css']
})
export class ReclamationAjoutComponent implements OnInit {
  newReclamation: Reclamation = new Reclamation();
  reclamationTypes: string[] = [
    'Manque_Communication',
    'Manque_Suivi_Encadrement',
    'Personnelle',
    'Condition_de_Travail',
    'Non_respet_engagements_contractuelles',
    'evaluation',
    'Administratif',
    'non_respet_normes_professionelles'
  ];

  constructor(private reclamationService: ReclamationService,private router: Router,private http: HttpClient) { }
  successMessage: string | null = null;
  
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.reclamationService.addReclamation(this.newReclamation).subscribe(
      (response) => {
        this.router.navigate(['/user/ajout-reclamation']);
        this.successMessage = "Reclamation successful";
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
