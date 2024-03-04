import { Component, Input, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tache } from 'app/Models/tache';
import { TacheService } from 'app/Services/TacheService/tache.service';
import { NotifService } from 'app/Services/Notification/notif.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './updatetache.component.html',
  styleUrls: ['./updatetache.component.css']
})
export class UpdateTacheComponent implements OnInit {
  tacheId: number;
  tache: Tache;
  @Input()tac:any
  taches: Tache[] = []; // Liste des commentaires disponibles
  tacheSelectionne: Tache | null = null; // Commentaire sélectionné pour la modification

  

  formTache: FormGroup;

  @Input()
  cancelLabel = 'Cance'
  @Input()
  showCancelButton

  constructor( @Inject(MAT_DIALOG_DATA) public data: { tacheId: number, tache: Tache }
  ,private formBuilder: FormBuilder, 
  private tacheService: TacheService) { 

    this.tacheId = data.tacheId;
    this.tache = data.tache;
  }
 


  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.formTache = this.formBuilder.group({
      priorite: [this.data.tache.priorite, Validators.required],
      description: [this.data.tache.description,Validators.required],
      status: [this.data.tache.status,Validators.required],
      delai: [this.data.tache.delai,Validators.required],
      performance: [this.data.tache.performance,Validators.required],
      remarque: [this.data.tache.remarque,Validators.required]
    });
  }

  updateTache(c:Tache){
    this.tacheService.updateTache(this.tache.id_tache,c).subscribe((data)=>{
      console.log("DONE !")
    })
    
  }}
