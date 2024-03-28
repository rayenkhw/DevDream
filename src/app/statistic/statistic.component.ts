import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'app/service/statistic.service';
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  topContributor: any;
  constructor(private  StatisticService:  StatisticService) { }

  ngOnInit(): void {
    this.StatisticService.findTopContributor().subscribe(
      data => {
        this.topContributor = data;
        console.log('Top contributor:', this.topContributor);
      },
      error => {
        console.error('Erreur lors de la récupération du top contributeur:', error);
      }
    );
  }
  }


