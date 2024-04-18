import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/Services/UserService/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user', title: 'user',  icon:'person', class: '' },
    { path: '/user-archives', title: 'user archives',  icon:'person', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/banne', title: 'List des Banne',  icon:'person', class: '' },
    { path: '/ajouterEvaluation', title: 'List des Evaluation',  icon:'content_paste', class: '' },
    { path:'/list-reclamations',title: 'List des Reclamations',  icon:'content_paste', class: '' },
    { path: '/list-stages', title: 'List des Stages',  icon:'content_paste', class: '' },

    //{ path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
   // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
   // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  //  { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
   // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
   // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logout() {
    this.authService.logout();
  }
}
