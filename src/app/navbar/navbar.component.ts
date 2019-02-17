import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarTitle: string;
  links: Object[];
  constructor() {
    this.navbarTitle = 'Raptus Foundation ⛰️';
    this.links = [
      {
        path: '/home',
        text: 'Home'
      },
      {
        path: 'footpaths',
        text: 'Sentieri'
      },
      {
        path: 'falesie',
        text: 'Falesie'
      },
      {
        path: 'blog',
        text: 'Blog'
      }
    ];
  }

  ngOnInit() {
  }

}
