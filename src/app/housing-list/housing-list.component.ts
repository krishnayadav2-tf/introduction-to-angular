import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList : HousingLocation[] = [];
  results : HousingLocation[]=[];
  @Output() locationSelectedEvent =new EventEmitter<HousingLocation>();


  constructor(
    private locationService : LocationService
  ) { }
  ngOnInit(): void {
  }

  searchHousingLocations(searchText: String){
    //console.log(searchText);
    if (!searchText) return ;
    this.locationService.getAllHousingLocations().subscribe(
      (res:any) => console.log(res , 'res')
       // (
         // res.city.toLowerCase().includes(searchText.toLowerCase())
       // )
       
    );
    /*
    this.results=this.locationList.filter(
      (location:HousingLocation) => location.city.toLowerCase().includes(searchText.toLowerCase())
    );
    */
    this.locationService.log("Service Injection Log");
  }
  
  selectLocation(housingLocation : HousingLocation){
    this.locationSelectedEvent.emit(housingLocation);
    this.locationService.log("Service Injection Log2");
  }
}