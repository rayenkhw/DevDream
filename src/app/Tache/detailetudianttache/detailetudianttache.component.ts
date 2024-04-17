import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'app/Models/user';
import { TacheService } from 'app/Services/TacheService/tache.service';
import { AuthService } from 'app/Services/UserService/auth.service';

@Component({
  selector: 'app-detailetudianttache',
  templateUrl: './detailetudianttache.component.html',
  styleUrls: ['./detailetudianttache.component.css']
})
export class DetailetudianttacheComponent implements OnInit {
  etudiant: User;
  nombreTachesAffectees: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DetailetudianttacheComponent>,
    private tacheService: TacheService,
    private authService: AuthService
  ) {
    if (data && data.etudiant) {
      this.etudiant = data.etudiant;
    } else {
      console.error('No etudiant data provided');
      this.dialogRef.close();
    }

    if (data && data.etudiantId) {
      this.getNombreTachesAffectees(data.etudiantId);
    } else {
      console.error('No etudiantId provided');
      this.dialogRef.close();
    }
  }

  getNombreTachesAffectees(etudiantId: number): void {
    this.authService.getEncadrantId().subscribe(
      encadrantId => {
        this.tacheService.countTachesEtudiantEncadre(encadrantId, etudiantId).subscribe(
          count => {
            this.nombreTachesAffectees = count;
          },
          error => {
            console.error('Error retrieving the number of assigned tasks:', error);
          }
        );
      },
      error => {
        console.error('Error retrieving supervisor ID:', error);
      }
    );
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
