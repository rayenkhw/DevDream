import { Component, OnInit ,Input,Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tache, Tache_status } from 'app/Models/tache';
import { TacheService } from 'app/Services/TacheService/tache.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialogRef} from '@angular/material/dialog';


import {MatTableDataSource} from '@angular/material/table';

import {DOCUMENT} from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MatDialog } from '@angular/material/dialog';
import { AddtacheComponent } from '../addtache/addtache.component';
import { UpdateEtiquetteComponent } from 'app/Etiquette/update-etiquette/update-etiquette.component';
import { UpdateTacheComponent } from '../updatetache/updatetache.component';


declare var $: any;

@Component({
  selector: 'app-alltache',
  templateUrl: './alltache.component.html',
  styleUrls: ['./alltache.component.css']
})
export class AlltacheComponent implements OnInit {
  @Input() tache: Tache; 
  tacheForm: FormGroup;
  taches: Tache[];
  fileNameDialogRef: MatDialogRef<AddtacheComponent>;
  fileNameDialogRefup:MatDialogRef<UpdateTacheComponent>
  
  stages: any;
  dataSource = new MatTableDataSource<Tache>();
  commBinding: any;
  result: boolean;
  showUpdate = false;
 
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder, private tacheService: TacheService, private router: Router, @Inject(DOCUMENT) private doc: Document) { 
    
  }

  ngOnInit(): void {
    this.initializeForm();
    this.loadTaches();
  }
  

  initializeForm(): void {
    this.tacheForm = this.formBuilder.group({
      priorite: ['', [Validators.required, Validators.min(0)]],
      description: [''],
      status: [Tache_status.Todo],
      delai: [''],
      performance: [''],
      remarque: ['']
    });
  }
  refresh(): void {
    this.doc.defaultView.location.reload();
}

  loadTaches(): void {
    this.tacheService.getAllTaches().subscribe(
      data => {
        this.taches = data;
      },
      error => {
        console.error('Error fetching taches: ', error);
      }
    );
  }
  Supprimer(id: number) {
    this.tacheService.deleteTache(id).subscribe(() => {
        console.log(id)
        this.dataSource.data = this.dataSource.data.filter(
            (tache: Tache) => tache.id_tache !== id
        );
    });
  }

  onSubmit(): void {
    if (this.tacheForm.valid) {
      const tache: Tache = this.tacheForm.value;
      this.tacheService.saveTache(tache).subscribe(
        data => {
          console.log('response', data);
          this.router.navigateByUrl("Tache");
        },
        error => {
          console.error('Error adding tache: ', error);
        }
      );
    }
  }
  confirmBox(id_tache: any,nom: any) {
    Swal.fire({
        title: 'Are you sure want to remove : '+nom+' ?',
        text: 'You will not be able to recover this tache!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
    }).then((result) => {
        if (result.value) {
            this.Supprimer(id_tache);
            Swal.fire(
                'Deleted!',
                'Your imaginary tache has been deleted.',
                'success'
            )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelled',
                'Your imaginary tache is safe :)',
                'error'
            )
        }
    })
  }
  open() {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width="25%";
    this.fileNameDialogRef = this.dialog.open(AddtacheComponent, dialogConfig)
  }
  showUpdateForm(f: any) {
    this.commBinding = f;
    this.showUpdate = true;
  }
  openup(tache: Tache) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "25%";
    dialogConfig.data = {
      tacheId: tache.id_tache,
      tache: tache
    };
    this.fileNameDialogRefup = this.dialog.open(UpdateTacheComponent, dialogConfig);
  }
  
  hideUpdateForm() {
    this.showUpdate = false;
  }
  
  updateTache(tache: Tache) {
    if (tache && tache.id_tache) {
      this.tacheService.updateTache(tache.id_tache,tache).subscribe(
        () => {
          console.log('tache mis à jour avec succès:', tache.id_tache);
          this.loadTaches();
          this.hideUpdateForm();
          Swal.fire('Success', 'tache mis à jour avec succès', 'success');
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du tache:', error);
          Swal.fire('Error', 'Erreur lors de la mise à jour du tache', 'error');
        }
      );
    } else {
      console.error('Comment or its ID is undefined');
    }
  



}


}

