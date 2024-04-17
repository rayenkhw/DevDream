import { Component, OnInit } from '@angular/core';
import { ReponseService } from '../reponse.service';
import { Reponse } from '../reponse.module';
@Component({
  selector: 'app-reponse-list',
  templateUrl: './reponse-list.component.html',
  styleUrls: ['./reponse-list.component.css']
})
export class ReponseListComponent implements OnInit {

  reponses:Reponse[]=[];
  constructor(private reponseService : ReponseService) { }

  ngOnInit(): void {
    this.loadReponses();
  }
  loadReponses() :void{
    this.reponseService.getReponses().subscribe(
      (data: Reponse[]) => {
        this.reponses = data;
      },
      (error) => {
        console.error('affichage maye5demch', error);
      }
    );
  }

}
