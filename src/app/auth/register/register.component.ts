import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Users:Users[]=[];

  User: Users ={
      name:"",
      email:"",
      password:"",
      Cfpassword:"",
      IsUser:true
  }
  passwordIsCorrect:boolean=false;

  constructor(private UserService:RegisterService) { }

  ngOnInit(): void {
  }
  CreateUser(){
      //console.log(this.User);
      if(this.User.Cfpassword==this.User.password){
        this.UserService.Create(this.User)
        .subscribe((user)=>{
          this.Users=[user,...this.Users]
        })
        this.resetForm();
      }else{
          this.passwordIsCorrect=true;
      }
    }
    resetForm(){
     this.User ={
        name:"",
        email:"",
        password:"",
        Cfpassword:"",
        IsUser:true
    }
    this.passwordIsCorrect=false;
    }


}
