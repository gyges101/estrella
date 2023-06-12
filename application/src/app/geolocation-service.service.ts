import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationServiceService {

  getCurrentLocation(): Promise<GeolocationCoordinates> {

    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocation is not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position.coords),
          (error) => reject('Unable to retrieve your location')
        );
      }
    });

  }
}
