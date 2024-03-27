import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  ngOnInit(): void {
    
  }
 // etudiants: User[] = [];
 // constructor(private offreService: OffreService) { }

 // ngOnInit(): void {
 //   this.getEtudiantsparoffre();
 // }
 //getEtudiantsparoffre(): void{
   // const id_offre = 1;
    //this.offreService.getEtudiantsparoffre(id_offre).subscribe(etudiants => this.etudiants = etudiants);
  //}
}

