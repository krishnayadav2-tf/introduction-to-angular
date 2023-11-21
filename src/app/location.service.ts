import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationURL : string ="http://localhost:3000/locations";

  constructor(
    protected httpClient: HttpClient
  ) { }

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

  getAllHousingLocations(){
    
    //const resp = this.httpClient.request('GET', this.locationURL, {responseType:'json'});
    return this.httpClient.request('GET', this.locationURL, {responseType:'json'})
    //  this.housingLocationList;
  }


/*   getHousingLocationBySearchText(searchText: String): HousingLocation | undefined {
    return this.housingLocationList.find
      (housingLocation => housingLocation.city.toLowerCase().
        includes(searchText.toLowerCase()));
  } */

}
