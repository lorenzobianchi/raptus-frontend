import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footpaths',
  templateUrl: './footpaths.component.html',
  styleUrls: ['./footpaths.component.scss']
})
export class FootpathsComponent implements OnInit {
  areas: Object[];
  constructor() {
    this.areas = [
      {
        title: 'Val Seriana',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        pathNumber: 16,
        province: 'BG',
      },
      {
        title: 'Val Brembana',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        pathNumber: 1,
        province: 'BG',
      },
      {
        title: 'Val Sassina',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        pathNumber: 4,
        province: 'LE',
      },
      {
        title: 'Val Sassina',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        pathNumber: 6,
        province: 'LE',
      },
      {
        title: 'Val Sassina',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        pathNumber: 28,
        province: 'LE',
      },
      {
        title: 'Val Sabbia',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        pathNumber: 34,
        province: 'BS',
      }
    ];
  }

  ngOnInit() {
  }

}
