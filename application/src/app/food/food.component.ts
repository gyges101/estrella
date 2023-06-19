import { Component, OnInit } from '@angular/core';
import { AxiosInstance } from 'axios';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { AxiosinstanceService } from '../axiosinstance.service';
import { HOST } from '../axiosinstance.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit{

  private axiosInstance: AxiosInstance;

  constructor(
    private AxiosInstanceService: AxiosinstanceService,
    private route: Router,
    private _Activatedroute: ActivatedRoute
    ) {
      this.axiosInstance = this.AxiosInstanceService.getInstance();
    }

  data!: any;

  host!: any;

  id!: any;

  async ngOnInit(): Promise<void> {


    this.id = (this._Activatedroute.snapshot.queryParamMap.get('id'))?.toString();
    console.log(this.id);
    this.host = HOST;

    await this.axiosInstance.get(`getFoodById:${this.id}`).then(
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
