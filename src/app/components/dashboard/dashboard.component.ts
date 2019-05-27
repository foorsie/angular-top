import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  navCollapsed: boolean = false;


  toggleNav() {
    this.navCollapsed = !this.navCollapsed;
  }

  constructor() {


   }

  ngOnInit() {

  }

}
