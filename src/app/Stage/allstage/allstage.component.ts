
import {Component, Inject, OnInit} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';

import {DOCUMENT} from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Stage } from 'app/Models/stage';
import { StageService } from 'app/Services/StageService/stage.service';


declare var $: any;

@Component({
  selector: 'app-allstage',
  templateUrl: './allstage.component.html',
  styleUrls: ['./allstage.component.css']
})
export class AllstageComponent implements OnInit {

  stages: any;
  dataSource = new MatTableDataSource<Stage>();
  constructor(private stageservice: StageService, @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {
    this.stageservice.getAllStages().subscribe(
      (d) => {
          console.log(d);
          this.stages = d;
      }
  )
  }
  refresh(): void {
    this.doc.defaultView.location.reload();
}
Supprimer(id: number) {
  this.stageservice.deleteStage(id).subscribe(() => {
      console.log(id)
      this.dataSource.data = this.dataSource.data.filter(
          (stage: Stage) => stage.id_stage !== id
      );
  });
}

confirmBox(id_stage: any,nom: any) {
  Swal.fire({
      title: 'Are you sure want to remove : '+nom+' ?',
      text: 'You will not be able to recover this stage!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
  }).then((result) => {
      if (result.value) {
          this.Supprimer(id_stage);
          Swal.fire(
              'Deleted!',
              'Your imaginary stage has been deleted.',
              'success'
          )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
              'Cancelled',
              'Your imaginary id_stage is safe :)',
              'error'
          )
      }
  })
}

}

