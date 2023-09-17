
import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'practice1';
  genders=['خانم','آقا'];
  password:any='';
  signupForm:FormGroup;
  ngOnInit(): void {
    this.signupForm=new FormGroup({
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,[Validators.required]),
      repassword:new FormControl(null,[Validators.required]),
      
      gender:new FormControl('male'),
    })
  }
  onSubmit(){console.log(this.signupForm);
  }
}
