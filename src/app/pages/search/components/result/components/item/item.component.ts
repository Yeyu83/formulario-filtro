import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'FormularioFiltro/src/app/models/hotel';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Hotel;

  constructor() { }

  ngOnInit() {
  }

}
