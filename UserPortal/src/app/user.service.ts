import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../auth/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient:HttpClient) { }


  getUserDetails():Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:5000/api/users/userInfo");
  }
}

