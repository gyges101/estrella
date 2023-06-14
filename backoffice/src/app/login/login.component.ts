import { Component, OnInit } from '@angular/core';
import { AxiosInstance } from 'axios';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { AxiosInstanceService } from '../axios-instance.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  private axiosInstance: AxiosInstance;

  constructor(
    private AxiosInstanceService: AxiosInstanceService,
    private formBuilder: FormBuilder,
    private route: Router
    ) {
      this.axiosInstance = this.AxiosInstanceService.getInstance();
    }

  loginForm = {
    email: '',
    password: '',
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  login(){
    this.axiosInstance.post('login', this.loginForm).then(
      (res) => {
        const tokenInfo = this.getDecodedAccessToken(res.data.token);
        localStorage.setItem('key', JSON.stringify(tokenInfo));
        this.route.navigate(['/home']);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
      
  }

}
