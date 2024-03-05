import { Component, OnInit } from '@angular/core';
import { StageserviceService } from '../stageservice.service';
import { Stage } from '../stage.module';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.css']
})
export class StageListComponent implements OnInit {
  stages : Stage[] = [];
  constructor(private stageservice : StageserviceService) { }

  ngOnInit(): void {
    this.loadStages();
  }

  loadStages(): void {
    this.stageservice.getAllStages().subscribe(
      (data: Stage[]) => {
        this.stages = data;
      },
      error => {
        console.log('mochkla fi affichage les stages:', error);
      }
    );
  }


}
