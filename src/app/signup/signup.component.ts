import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements  OnInit {

  constructor() {}
  signup:FormGroup|any;
  ngOnInit(): void{
    this.signup = new FormGroup({
      'uname': new FormControl(),
      'email': new FormControl(),
      'password': new FormControl(),
      })
  }

  signupdata(signup:FormGroup){
    console.log(this.signup.value)
  }

}
