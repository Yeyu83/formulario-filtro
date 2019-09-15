import { Component, OnInit } from '@angular/core';
import { pages } from '../../data/pages';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: Array<string>;

  constructor() { }

  ngOnInit() {
    this.items = pages;
  }

}
