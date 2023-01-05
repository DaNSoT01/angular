import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../http.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[HttpService]
})
export class LoginComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  login:FormGroup|any;


  submit(){
    console.log('wtf', this.login)
    this.httpService.postUser(this.login.value.email,this.login.value.password)
  }

  ngOnInit(): void {
    this.login = new FormGroup({
          'email': new FormControl(),
          'password': new FormControl()
    })
   }
  }

