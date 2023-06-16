import { Component, OnInit } from '@angular/core';
import { AxiosInstance } from 'axios';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { AxiosInstanceService } from '../axios-instance.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit{

  private axiosInstance: AxiosInstance;

  constructor(
    private AxiosInstanceService: AxiosInstanceService,
    private formBuilder: FormBuilder,
    private route: Router
    ) {
      this.axiosInstance = this.AxiosInstanceService.getInstance();
    }
  
  foodForm = {
    categorie: 0,
    name: '',
    description: '',
    price: 0,
    image: ''
  }

  data!: any;
  categorie!:any;

  addFood() {

    this.axiosInstance.post('addFood', this.foodForm).then(
      (res) => {
        location.reload();
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )

  }

  ngOnInit(): void {

    this.axiosInstance.get('getFood').then(
      (res) => {
        this.data = res.data
        console.log(this.data)
      }
    ).catch (
      (err) => {
        console.log(err);
      }
    )

    this.axiosInstance.get('getCategorie').then(
      (res) => {
        this.categorie = res.data
        console.log(this.data)
      }
    ).catch (
      (err) => {
        console.log(err);
      }
    )

  }

}
