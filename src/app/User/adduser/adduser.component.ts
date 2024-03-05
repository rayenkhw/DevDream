import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, Niveau, Specialite, Role } from 'app/Models/user';
import { UserService } from 'app/Services/UserService/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(6)]],
      niveau: ['', Validators.required],
      specialite: ['', Validators.required],
      role: ['', Validators.required],
      disponibilite: [false],
      image: [''],
      chargeTravail: ['']
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.saveUser(newUser).subscribe(
        () => {
          console.log('User added successfully');
          this.router.navigateByUrl("/users");
        },
        error => {
          console.error('Error adding user: ', error);
        }
      );
    }
  }
}
