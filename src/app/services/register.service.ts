import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  appUrl="http://localhost:4000/User";

  constructor(private http:HttpClient) { }

  Create(User){
    return this.http.post<Users>(this.appUrl,User);
  }
}
