import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Formation } from 'app/ranim/formation/formation.module';
import { FormationService } from 'app/ranim/formation/formation.service';
import { error } from 'console';

@Component({
  selector: 'app-formation-user',
  templateUrl: './formation-user.component.html',
  styleUrls: ['./formation-user.component.css']
})
export class FormationUserComponent implements OnInit {
  formations: Formation[] = [];
mot_cle: any;
  

  constructor(private formationService: FormationService,private http: HttpClient) {}

  ngOnInit(): void {
    this.loadFormations();
  }
  loadFormations(): void {
    this.formationService.getFormations().subscribe(
      (data: Formation[]) => {
        this.formations = data;
      },
      (error) => {
        console.error('Error fetching formations:', error);
      },
      () => {
        console.log('subscription completed');
      }
    );
  }
  addJadoreToFormation(id_formation: number): void {
    this.formationService.getFormations().subscribe(updateFormation => {
      const index = this.formations.findIndex(formation =>formation.id_formation === updateFormation.id_formation);
      this.formations[index] = updateFormation;});

    
  }    
  searchFormations(mot_cle: string): void {
    this.formationService.searchFormations(mot_cle).subscribe(formations => {
      this.formations = formations;
    });
  }
}
