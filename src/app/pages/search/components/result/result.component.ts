import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  hotels: any;

  constructor(
    private hotelsService: HotelsService
  ) { }

  ngOnInit() {
    this.hotelsService.hotelsSubject.subscribe(hotels => {
      this.hotels = hotels;
      console.log(this.hotels);
    });
    this.hotelsService.getHotels();
  }

}
