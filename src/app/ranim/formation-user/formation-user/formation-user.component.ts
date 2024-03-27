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
        this.formations = data.map(formation => ({
          ...formation,
          isLiked: false // Ajoutez la propriété isLiked à chaque formation initialement à false
        }));
      },
      (error) => {
        console.error('Error fetching formations:', error);
      }
    );
  }

  toggleJadore(formation: Formation): void {
    formation.isLiked = !formation.isLiked;
    if (formation.isLiked) {
      formation.nombreLikes++;
    } else {
      formation.nombreLikes--;
    }

    this.formationService.modifyFormation(formation.id_formation, formation).subscribe(
      () => {
        console.log('Formation updated successfully.');
      },
      (error) => {
        console.error('Error updating formation:', error);
        // Revert changes on error
        formation.isLiked = !formation.isLiked;
        if (formation.isLiked) {
          formation.nombreLikes--;
        } else {
          formation.nombreLikes++;
        }
      }
    );
  }

  searchFormations(mot_cle: string): void {
    this.formationService.searchFormations(mot_cle).subscribe(formations => {
      this.formations = formations;
    });
  }
}
