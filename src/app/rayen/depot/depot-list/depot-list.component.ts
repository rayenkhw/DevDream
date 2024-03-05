import { Component, OnInit } from '@angular/core';
import { DepotService } from '../depot.service';
import { Depot } from '../depot.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-depot-list',
  templateUrl: './depot-list.component.html',
  styleUrls: ['./depot-list.component.css']
})
export class DepotListComponent implements OnInit {
  depots: Depot[] = [];
  constructor(private depotservice : DepotService,private router: Router) { }

  ngOnInit(): void {
    this.loadDepots();
  }

  loadDepots(): void {
    this.depotservice.getAllDepots().subscribe(
      (data: Depot[]) => {
        this.depots = data;
      },
      error => {
        console.log('mochkla fi affichage depots', error);
      }
    );
  }

  modifyDepot(id_depot: number): void {
    // Navigate to the modify-depot page and pass the id_depot as a route parameter
    this.router.navigate(['/user/modify-depot/' + id_depot]);
  }

}
