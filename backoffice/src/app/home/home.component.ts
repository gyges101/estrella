import { Component, OnInit } from '@angular/core';
import { AxiosInstance } from 'axios';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { AxiosInstanceService } from '../axios-instance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  private axiosInstance: AxiosInstance;

  constructor(
    private AxiosInstanceService: AxiosInstanceService,
    private formBuilder: FormBuilder,
    private route: Router
    ) {
      this.axiosInstance = this.AxiosInstanceService.getInstance();
    }

  data!: any;
  categorie!:any;

  telegramForm = {
    tokenbot: '',
    chatId: ''
  }

  changeTelegram() {

    this.axiosInstance.post('addTelegram', this.telegramForm).then(
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

    this.axiosInstance.get('getTelegram').then(
      (res) => {
        this.telegramForm.chatId = res.data[0].chatId;
        this.telegramForm.tokenbot = res.data[0].tokenbot;
        console.log(this.data.token)
      }
    ).catch (
      (err) => {
        console.log(err);
      }
    )
      
  }

}
