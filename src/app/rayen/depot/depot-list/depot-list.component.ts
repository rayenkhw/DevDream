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
 // Selected date
 selectedDate: string = '';

 // Comparison option
 comparison: string = '';

  // Filtered depots based on selected date and comparison
  filteredDepots: Depot[] = [];

  constructor(private depotservice : DepotService,private router: Router) {
    
   }
  
  ngOnInit(): void {
    this.loadDepots();
    

  }

  loadDepots(): void {
    this.depotservice.getAllDepots().subscribe(
      (data: Depot[]) => {
        this.depots = data;
        this.filteredDepots = data;
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

  openFile(filepath: string): void {
    const filename = filepath.split('\\').pop().split('/').pop(); // Split by both backslash and forward slash

  // Construct the full path to the file in the assets folder
  const fullFilePath = `assets/${filename}`;

  window.open(fullFilePath, '_blank');
  }
  // Filtered depots based on selected date and comparison
  // Function to handle filtering when the selected date or comparison option changes
  filterDepots() {
    if (!this.selectedDate || !this.comparison) {
      this.filteredDepots = this.depots; // Return all depots if date or comparison is not selected
      return;
    }

    // Filter depots based on selected date and comparison
    this.filteredDepots = this.depots.filter(depot => {
      const depotDate = new Date(depot.date_depot);
      const selectedDate = new Date(this.selectedDate);
      
      if (this.comparison === 'earlier') {
        return depotDate < selectedDate;
      } else if (this.comparison === 'later') {
        return depotDate > selectedDate;
      } else if (this.comparison === 'same') {
        return depotDate.getTime() === selectedDate.getTime();
      }

      return false;
    });
    console.log('Filtering depots...');
  console.log('Selected Date:', this.selectedDate);
  console.log('Comparison:', this.comparison);
  }

}
