import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Offre } from 'app/ranim/offre/offre.module';
import { OffreService } from 'app/ranim/offre/offre.service';

@Component({
  selector: 'app-offre-user',
  templateUrl: './offre-user.component.html',
  styleUrls: ['./offre-user.component.css']
})
export class OffreUserComponent implements OnInit {
  Offres: Offre[] = [];
  keywords: any;
  

  constructor(private offreService: OffreService) {}

  ngOnInit(): void {
    this.loadOffres();
  }
  loadOffres(): void {
    this.offreService.getOffres().subscribe(
      (data: Offre[]) => {
        this.Offres = data;
      },
      (error) => {
        console.error('Error fetching offres:', error);
      },
      () => {
        console.log('subscription completed');
      }
    );
  }  
  searchOffers(keywords: string): void {
    this.offreService.searchOffers(keywords).subscribe(offres => {
      this.Offres = offres;
    });
  }
}
