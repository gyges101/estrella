import { Component, OnInit } from '@angular/core';
import { GeolocationServiceService } from '../geolocation-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(
    private geolocationService: GeolocationServiceService
  ) {}

  ngOnInit(): void {

    this.geolocationService.getCurrentLocation()
    .then((coords) => {
      console.log(coords)
    })
    .catch((error) => console.error(error));
      
  }

}
