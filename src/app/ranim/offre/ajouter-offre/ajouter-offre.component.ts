import { Component, OnInit , AfterViewInit, ViewChild, Renderer2,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffreService } from '../offre.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.css']
})
export class AjouterOffreComponent implements OnInit{
  offreForm: FormGroup;
  filteredVilles: string[] = [];

  gouvernorats: string[] = ['Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Nabeul', 'Zaghouan', 
  'Bizerte', 'Béja', 'Jendouba', 'Kef', 'Siliana', 'Kairouan', 'Kasserine', 'Sidi Bouzid',
   'Sousse', 'Monastir', 'Mahdia', 'Sfax', 'Gafsa', 'Gabès', 'Médenine', 'Tataouine', 'Tozeur', 'Kébili'];

  villesParGouvernorat: { [key: string]: string[] } = {
    'Tunis': ['Tunis', 'La Marsa', 'Carthage', 'Le Bardo', 'Sidi Bou Saïd'],
    'Ariana': ['Ariana', 'La Soukra', 'Raoued', 'Ettadhamen-Mnihla'],
    'Ben Arous': ['Ben Arous', 'El Mourouj', 'Hammam Lif', 'Radès'],
    'Manouba': ['Manouba', 'Douar Hicher', 'Oued Ellil', 'Borj El Amri'],
    'Nabeul': ['Nabeul', 'Hammamet', 'Kelibia', 'Menzel Temime'],
    'Zaghouan': ['Zaghouan', 'Zriba', 'Bir Mcherga', 'Djebel Oust'],
    'Bizerte': ['Bizerte', 'Menzel Bourguiba', 'Ras Jebel', 'Mateur'],
    'Béja': ['Béja', 'Testour', 'Medjez el-Bab'],
    'Jendouba': ['Jendouba', 'Tabarka', 'Aïn Draham', 'Ghardimaou'],
    'Kef': ['Kef', 'Dahmani', 'Tajerouine', 'Sakiet Sidi Youssef'],
    'Siliana': ['Siliana', 'Makthar', 'Bou Arada', 'El Krib'],
    'Kairouan': ['Kairouan', 'Sidi Bouzid', 'Oueslatia', 'Hajeb El Ayoun'],
    'Kasserine': ['Kasserine', 'Sbeitla', 'Feriana', 'Thala'],
    'Sidi Bouzid': ['Sidi Bouzid', 'Regueb', 'Jilma', 'Meknassy'],
    'Sousse': ['Sousse', 'Monastir', 'Akouda', 'Kalâa Kebira'],
    'Monastir': ['Monastir', 'Moknine', 'Sahline', 'Sayada-Lamta-Bou Hajar'],
    'Mahdia': ['Mahdia', 'El Jem', 'Chebba', 'Ouled Chamekh'],
    'Sfax': ['Sfax', 'Sakiet Ezzit', 'El Ain', 'Mahares'],
    'Gafsa': ['Gafsa', 'Metlaoui', 'Moularès', 'Redeyef'],
    'Gabès': ['Gabès', 'Métouia', 'Ghannouch', 'Matmata'],
    'Médenine': ['Médenine', 'Djerba', 'Ben Gardane', 'Zarzis'],
    'Tataouine': ['Tataouine', 'Ghomrassen', 'Bir Lahmar', 'Remada'],
    'Tozeur': ['Tozeur', 'Nefta', 'Degache', 'Tamerza'],
    'Kébili': ['Kébili', 'Douz', 'Souk Lahad', 'El Golâa'],
  };
  villes: any;
  
  constructor(private offreService: OffreService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.offreForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      skills: ['', Validators.required],
      duree: ['', Validators.required],
      gouvernorat: ['', Validators.required],
      ville: ['', Validators.required],
      adresse: ['', Validators.required],
      nom: ['', Validators.required],
      
    });
    this.filteredVilles = this.villesParGouvernorat[this.gouvernorats[0]];
  }
  // Méthode appelée lorsque le gouvernorat est sélectionné
  onGovernorateChange() {
    const selectedGovernorate = this.offreForm.get('gouvernorat').value;
    this.filteredVilles = this.villesParGouvernorat[selectedGovernorate];
  }
  
  addOffre() {
    if (this.offreForm.valid) {
      this.offreService.addOffre(this.offreForm.value).subscribe(
        res => {
          console.log("Réponse du service :", res);
          // Navigation vers la page d'affichage des offres après ajout réussi
          this.router.navigate(['/user/afficher-offre']);
        },
        error => {
          console.error("Erreur lors de l'ajout de l'offre :", error);
          // Gérer l'erreur d'ajout de l'offre ici
        }
      );
    } else {
      console.log("Veuillez remplir tous les champs du formulaire.");
    }
  }

 
}
