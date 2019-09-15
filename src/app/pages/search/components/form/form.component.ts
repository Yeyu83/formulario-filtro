import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private hotelsService: HotelsService,
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      habitaciones: [''],
      desayuno: ['']
    });
    this.form.valueChanges.subscribe(filters => {
      this.hotelsService.getHotels(filters);
    });
  }

}
