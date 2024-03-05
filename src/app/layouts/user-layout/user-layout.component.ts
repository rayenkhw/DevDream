import { Component, OnInit , ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';

import { filter, Subscription } from 'rxjs';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/ghofrane', title: 'Ghofrane',  icon: 'dashboard', class: '' }
];
@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
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

 
  getTitle(): string {
    // Implement logic to get the title dynamically
    return 'Title';
  }

  sidebarToggle(): void {
    // Implement logic to toggle the sidebar visibility
    console.log('Sidebar toggled');
    // You can add your logic here to toggle the sidebar visibility
  }

 

}

