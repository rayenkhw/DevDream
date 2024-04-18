import { Component, OnInit } from '@angular/core';
import { ReponseService } from '../reponse.service';
//import { ReclamationService } from 'app/dorra/reclamation/reclamation.service';
import { Reponse } from '../reponse.module';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reponse-ajout',
  templateUrl: './reponse-ajout.component.html',
  styleUrls: ['./reponse-ajout.component.css']
})
export class ReponseAjoutComponent implements OnInit {
 
  id_Reclamation: number; 
  newReponse: Reponse = new Reponse();
  
  
  constructor(private reponseService: ReponseService,
    private router: Router,private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
     this.id_Reclamation = +this.route.snapshot.paramMap.get('id_Reclamation');
    // const state = this.router.getCurrentNavigation()?.extras.state;
    // if (state && state.reclamation) {
    //   this.newReponse.id_Reclamation = state.reclamation.id_Reclamation;
    //   // ... other fields you may want to pre-fill
    // }
  }
  

  onSubmit(): void {
 
    this.newReponse.id_Reclamation  = this.id_Reclamation ;
    this.reponseService.addReponse(this.newReponse, this.id_Reclamation).subscribe(
      (response) => {
        console.log('Reponse added successfully:', response);
        // You can add further logic here, such as redirecting to a different page.
        this.router.navigate(['/admin/list-reclamations']);
      },
      (error) => {
        console.error('Error adding reclamation:', error);
        // Handle the error as needed.
      }
    );
  }
  

    
}
