import { Component, OnInit } from '@angular/core';
import { GeolocationServiceService } from '../geolocation-service.service';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(
    private geolocationService: GeolocationServiceService
  ) {}

    lat!: number;
    lng!: number;

    getLocationname = (lat:any, lng:any) => {
    const params = {
      access_key: '086a3f1493916dd9fa67621f474ec198',
      query: `${lat}, ${lng}`
    };
    
    axios.get('https://api.positionstack.com/v1/reverse', {params})
      .then(response => {
        console.log(response.data);

      }).catch(error => {
        console.log(error);
      });
  }

  ngOnInit(): void {

    this.geolocationService.getCurrentLocation()
    .then((coords) => {
      console.log(coords);
      
      this.lat = coords.latitude;
      this.lng = coords.longitude;

    })
    .catch((error) => console.error(error));
      
  }

}
