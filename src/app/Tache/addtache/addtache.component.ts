import { Component,EventEmitter, Inject, Input, OnInit, Output  } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Tache, Tache_status } from 'app/Models/tache';
import { TacheService } from 'app/Services/TacheService/tache.service';
import {ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { AuthService } from 'app/Services/UserService/auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-addtache',
  templateUrl: './addtache.component.html',
  styleUrls: ['./addtache.component.css']
})
export class AddtacheComponent implements OnInit {
  @Output()notif=new EventEmitter();
  @Output() tacheAdded: EventEmitter<Tache> = new EventEmitter<Tache>();
  myControl = new FormControl('');
  tacheForm: FormGroup;
  options: string[] = ['ToDO', 'InProgress', 'Done'];
  filteredOptions: Observable<string[]>;
  taches: Tache[]=[];
  tache:Tache=new Tache();
  clicked : boolean = false;
  date:string;

  constructor(@Inject(DOCUMENT) private doc: Document,private authService: AuthService,private formBuilder: FormBuilder, private tacheService: TacheService, 
    private _activatedRoute: ActivatedRoute, private router: Router) {


     }

  ngOnInit(): void {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    
    this.date= yyyy + '-' + mm + '-' + dd;  

    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
      map(value => this._filter(value || '')),);

    this.initializeForm();
    this.loadTaches();
  }
  loadTaches(): void {
   
      // Appel du service d'authentification pour récupérer l'ID de l'encadrant
      this.authService.getEncadrantId().subscribe(
        encadrantId => {
          // Utilisation de l'ID de l'encadrant pour récupérer les tâches des étudiants encadrés
          this.tacheService.getTasksForSupervisor(encadrantId).subscribe(
            tasks => {
              this.taches = tasks;
            },
            error => {
              console.error('Une erreur s\'est produite lors de la récupération des tâches : ', error);
            }
          );
        },
        error => {
          console.error('Une erreur s\'est produite lors de la récupération de l\'ID de l\'encadrant : ', error);
        }
      );
      
  }
  refresh(): void {
    this.doc.defaultView.location.reload();
}
  initializeForm(): void {
    this.tacheForm = this.formBuilder.group({
      priorite: ["", [Validators.required, Validators.min(0)]],
      description: ['',Validators.required],
      status: [Tache_status.Todo,Validators.required],
      delai: ['',Validators.required],
      performance: ['',Validators.required],
      remarque: ['',Validators.required],
      identifiantEtudiant: ['', Validators.required]
    });
  }
  addTache(){
    this.clicked = true;
  }
  get priorite(){
    return this.tacheForm.get('priorite');
  }
  get description(){
    return this.tacheForm.get('description');
  }
  get delai(){
    return this.tacheForm.get('delai');
  }
  get status(){
    return this.tacheForm.get('status');
  }
  get performance(){
    return this.tacheForm.get('performance');
  }
  get remarque(){
    return this.tacheForm.get('remarque');
  }
  get identifiantEtudiant(){
    return this.tacheForm.get('identifiantEtudiant');
  }

  onSubmit(): void {
    if (this.tacheForm.valid) {
      const tache: Tache = this.tacheForm.value;
      const identifiantEncadrant = this.authService.getIdentifiant(); 

      this.tacheService.assignerTacheByIdentifiant(identifiantEncadrant, this.tacheForm.value.identifiantEtudiant, tache).subscribe(
        data => {
          console.log('response', data);
          // Émettre l'événement tacheAdded avec la nouvelle tâche ajoutée
          this.tacheAdded.emit(tache);
          // Rediriger vers la page Ghofrane
          this.router.navigateByUrl('/user/ghofrane');
        },
        error => {
          console.error('Error adding tache: ', error);
        }
      );
    }
  }



  activeNote: string;
  enter(i) {
    this.activeNote = this.tacheForm.get('items').value;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
  
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/user/ghofrane']);
  }
  getErrorMessage(controlName: string) {
    const control = this.tacheForm.get(controlName);
    return control.hasError('required') ? 'Ce champ est requis' :
      control.hasError('min') ? 'La valeur minimale est 0' :
        '';
  }
  
  
}