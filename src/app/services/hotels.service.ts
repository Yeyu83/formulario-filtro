import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { hotels } from '../data/hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  hotelsSubject = new Subject();

  constructor() { }

  getHotels() {
    this.hotelsSubject.next(hotels);
  }

}
