import { Component, OnInit,Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'app/Models/user';
import { UserService } from 'app/Services/UserService/user.service';

declare var $: any;

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {
  users: any;
  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = [];
  

  constructor(private userservice: UserService, @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(
      (d) => {
          console.log(d);
          this.users = d;
      }
  )
  }
  refresh(): void {
    this.doc.defaultView.location.reload();
}
Supprimer(id: number) {
  this.userservice.deleteUser(id).subscribe(() => {
      console.log(id)
      this.dataSource.data = this.dataSource.data.filter(
          (user: User) => user.idUser !== id
      );
  });
}
confirmBox(id: any,nom: any) {
  Swal.fire({
      title: 'Are you sure want to remove : '+nom+' ?',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
  }).then((result) => {
      if (result.value) {
          this.Supprimer(id);
          Swal.fire(
              'Deleted!',
              'Your user has been deleted.',
              'success'
          )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
              'Cancelled',
              'Your user is safe :)',
              'error'
          )
      }
  })
}

}
