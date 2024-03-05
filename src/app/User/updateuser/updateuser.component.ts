import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/Models/user';
import { UserService } from 'app/Services/UserService/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(userId).subscribe(
      (user: User) => {
        this.user = user;
        this.initializeForm();
      },
      error => {
        console.error('Error fetching user: ', error);
      }
    );
  }

  userForm: FormGroup;

  initializeForm(): void {
    this.userForm = this.fb.group({
      nom: [this.user.nom, Validators.required],
      prenom: [this.user.prenom, Validators.required],
      cin: [this.user.cin, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      mdp: [this.user.mdp, [Validators.required, Validators.minLength(6)]],
      niveau: [this.user.niveau, Validators.required],
      specialite: [this.user.specialite, Validators.required],
      role: [this.user.role, Validators.required],
      disponibilite: [this.user.disponibilite],
      image: [this.user.image],
      chargeTravail: [this.user.chargeTravail]
    });
  }

  onSubmit(): void {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.user = this.userForm.value;
    this.userService.updateUser(userId, this.user).subscribe(
      data => {
        console.log('User updated successfully:', data);
        this.router.navigateByUrl("/User");
      },
      error => {
        console.error('Error updating user: ', error);
      }
    );
  }
}
