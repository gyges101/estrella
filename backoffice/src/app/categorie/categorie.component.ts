import { Component, OnInit } from '@angular/core';
import { AxiosInstance } from 'axios';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { AxiosInstanceService } from '../axios-instance.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{

  private axiosInstance: AxiosInstance;

  constructor(
    private AxiosInstanceService: AxiosInstanceService,
    private formBuilder: FormBuilder,
    private route: Router
    ) {
      this.axiosInstance = this.AxiosInstanceService.getInstance();
    }

    categorieForm = {
      name: '',
      icon: ''
    }
    data!: any;

    addCategorie() {

      this.axiosInstance.post('addCategorie', this.categorieForm).then(
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

    this.axiosInstance.get('getCategorie').then(
      (res) => {
        this.data = res.data
        console.log(this.data)
      }
    ).catch (
      (err) => {
        console.log(err);
      }
    )
     
  }


}
