import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl:"http://localhost:4000/api"

  constructor(public http: HttpClient) { }

  getprofilefor(){
    return this.http.get("http://localhost:4000/api/admin/allprofilefor")
  }

}
