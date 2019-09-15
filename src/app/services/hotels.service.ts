import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { hotels } from '../data/hotels';
import { Hotel } from 'FormularioFiltro/src/app/models/hotel';
import { Filter } from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  filteredHotels: Array<Hotel> = [];

  hotelsSubject = new Subject();

  constructor() { }

  async getHotels(filters?: Filter) {
    this.filteredHotels = [];
    if (filters) {
      await this.filterHotels(filters);
      this.hotelsSubject.next(this.filteredHotels);
    } else {
      this.hotelsSubject.next(hotels);
    }
  }
  
  filterHotels(filters: Filter) {
    hotels.forEach(hotel => {
      if (
        filters.habitaciones === hotel.habitaciones &&
        filters.desayuno === hotel.desayuno
      ) {
        this.filteredHotels.push(hotel);
      }
    });
  }

}
