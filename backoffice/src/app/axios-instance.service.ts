import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AxiosInstanceService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      // Configure your Axios instance options here
      // For example, you can set the base URL
      baseURL: 'http://localhost:3000/api/'
    });
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}
