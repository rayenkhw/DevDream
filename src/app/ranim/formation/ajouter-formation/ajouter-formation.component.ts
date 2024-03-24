import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private formationService: FormationService, private fb: FormBuilder) { }

  ngOnInit():void {
    this.validateForm = this.fb.group({
      titre: [null, [Validators.required]],
      description: [null, [Validators.required]],
      date_debut_formation: [null, [Validators.required]],
      date_fin_formation: [null, [Validators.required]]
    })
  }
  addFormation(){
    if (this.validateForm.valid){
      this.formationService.addFormation(this.validateForm.value).subscribe(res =>{
        console.log(res)
      });
    }else {
      console.log("Veuillez remplir tous les champs du formulaire.");
    }
  }

}
