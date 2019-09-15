import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { hotels } from '../../../../data/hotels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private hotelsService: HotelsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
