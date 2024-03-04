import { Component,EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Tache, Tache_status } from 'app/Models/tache';
import { TacheService } from 'app/Services/TacheService/tache.service';
import {ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-addtache',
  templateUrl: './addtache.component.html',
  styleUrls: ['./addtache.component.css']
})
export class AddtacheComponent implements OnInit {
  @Output()notif=new EventEmitter();
 
  myControl = new FormControl('');
  tacheForm: FormGroup;
  options: string[] = ['ToDO', 'InProgress', 'Done'];
  filteredOptions: Observable<string[]>;
  taches: Tache[]=[];
  tache:Tache=new Tache();
  clicked : boolean = false;
  date:string;

  constructor(private formBuilder: FormBuilder, private tacheService: TacheService, 
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
  }

  initializeForm(): void {
    this.tacheForm = this.formBuilder.group({
      priorite: ["", [Validators.required, Validators.min(0)]],
      description: ['',Validators.required],
      status: [Tache_status.Todo,Validators.required],
      delai: ['',Validators.required],
      performance: ['',Validators.required],
      remarque: ['',Validators.required]
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

  onSubmit(): void {
    if (this.tacheForm.valid) {
      const tache: Tache = this.tacheForm.value;
      this.tacheService.saveTache(tache).subscribe(
        data => {
          console.log('response', data);
          this.notif.emit(this.tacheForm.value);
          this.router.navigateByUrl("/user/alltache");
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
    this.router.navigate(['/user/alltache']);
  }
  getErrorMessage(controlName: string) {
    const control = this.tacheForm.get(controlName);
    return control.hasError('required') ? 'Ce champ est requis' :
      control.hasError('min') ? 'La valeur minimale est 0' :
        '';
  }
  
}
