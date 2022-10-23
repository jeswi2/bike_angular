import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.css']
})
export class AddbikeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  brand=""
  color=""
  price=""
  description=""



  readValues=()=>{
let data={
  "name":this.name,
  "brand":this.brand,
  "color":this.color,
  "price":this.price,
  "description":this.description
}
console.log(data)
this.myapi.addbike(data).subscribe(
  (response)=>{
    console.log(response)
    alert("success")
    this.name=""
  this.brand=""
  this.color=""
 this.price=""
  this.description=""
  
  }
)
  }

  ngOnInit(): void {
  }

}
