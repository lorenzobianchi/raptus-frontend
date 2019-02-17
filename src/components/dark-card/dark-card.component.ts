import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dark-card',
  templateUrl: './dark-card.component.html',
  styleUrls: ['./dark-card.component.scss'],
})
export class DarkCardComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() pathNumber: number;
  constructor() { }

  ngOnInit() {
  }

}
