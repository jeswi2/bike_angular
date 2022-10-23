import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


viewbike=()=>{
  return this.http.get("http://localhost:8080/viewbike")


}

addbike=(data:any)=>{
  return this.http.post("http://localhost:8080/addbike",data)
}




}
