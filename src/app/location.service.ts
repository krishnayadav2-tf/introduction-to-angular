import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  log(msg:any){console.log(msg);}

  housingLocationList: HousingLocation[] = [
    {
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Warm Beds Housing Support",
      city: "Juneau",
      state: "AK",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }


/*   getHousingLocationBySearchText(searchText: String): HousingLocation | undefined {
    return this.housingLocationList.find
      (housingLocation => housingLocation.city.toLowerCase().
        includes(searchText.toLowerCase()));
  } */

}
