import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Etiquette } from 'app/Models/etiquette';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { EtiquetteService } from 'app/Services/EtiquetteService/etiquette.service';

@Component({
  selector: 'app-all-etiquette',
  templateUrl: './all-etiquette.component.html',
  styleUrls: ['./all-etiquette.component.css']
})
export class AllEtiquetteComponent implements OnInit {
 etiquettes:any;
 dataSource = new MatTableDataSource<Etiquette>();
  constructor(private etiquetteservice:EtiquetteService, @Inject(DOCUMENT)private doc: Document) { }

  ngOnInit(): void {
    this.etiquetteservice.getAllEtiquettes().subscribe(
      (d) => {
          console.log(d);
          this.etiquettes = d;
      }
  )
  }
  refresh(): void {
    this.doc.defaultView.location.reload();
  }
  Supprimer(id: number) {
    this.etiquetteservice.deleteEtiquette(id).subscribe(() => {
        console.log(id)
        this.dataSource.data = this.dataSource.data.filter(
            (etiquette: Etiquette) => etiquette.id_etiquette !== id
        );
    });
  }

  confirmBox( id_etiquette: any,nom: any) {
    Swal.fire({
        title: 'Are you sure want to remove : '+nom+' ?',
        text: 'You will not be able to recover this etiquette!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
    }).then((result) => {
        if (result.value) {
            this.Supprimer(id_etiquette);
            Swal.fire(
                'Deleted!',
                'Your etiquette has been deleted.',
                'success'
            )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelled',
                'Your etiquette is safe :)',
                'error'
            )
        }
    })
  }
}
