import { Component, OnInit } from '@angular/core';
import { AxiosInstance } from 'axios';
import {Router} from '@angular/router';
import { AxiosinstanceService } from '../axiosinstance.service';
import { HOST } from '../axiosinstance.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  private axiosInstance: AxiosInstance;

  constructor(
    private AxiosInstanceService: AxiosinstanceService,
    private route: Router
    ) {
      this.axiosInstance = this.AxiosInstanceService.getInstance();
    }

  data!: any;

  host!: any;

  food = async (id:any) => {

    this.route.navigate(['/food', id]);
    
  }

  ngOnInit(): void {
    this.host = HOST;
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
