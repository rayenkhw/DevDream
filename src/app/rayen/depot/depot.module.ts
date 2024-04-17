import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotUpdateComponent } from './depot-update/depot-update.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ]
})
export class Depot { 

  id_depot : number;
  travail : string;
  rapportDeStage: string;
  journalDeStage: string;
  date_depot: Date;




}
