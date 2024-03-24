import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard red', class: '' },
  { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
  { path: '/afficher-offre', title: 'List offre', icon: 'content_paste', class: '' },
  { path: '/afficher-formation', title: 'List formation', icon: 'library_books', class: '' },
  { path: '/list-etudiant', title: 'List Etudiant', icon: 'library_books', class: '' },
  { path: '/afficher-feedback', title: 'List Feedback', icon: 'content_paste', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  { path: '/list-applications-admin', title: 'List application', icon: 'notifications', class: '' },





];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
