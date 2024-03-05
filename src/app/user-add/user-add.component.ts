import { Component,Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'app/service/user.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent  implements OnInit {

  validateForm!: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder) { } // Injectez OffreService ici

  ngOnInit() {
    this.validateForm = this.fb.group({
      titre: [null, [Validators.required]],
      description: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      duree: [null, [Validators.required]]

    })
  }
  addOffre() {
    if (this.validateForm.valid) {
      console.log("Formulaire valide. Données du formulaire :", this.validateForm.value);
    this.userService.addUser(this.validateForm.value).subscribe(res =>{
      console.log("Réponse du service :", res);
    });
  }else {
      console.log("Veuillez remplir tous les champs du formulaire.");
    }

  }
}
