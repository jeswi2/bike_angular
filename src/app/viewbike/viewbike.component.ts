import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewbike',
  templateUrl: './viewbike.component.html',
  styleUrls: ['./viewbike.component.css']
})
export class ViewbikeComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewbike().subscribe(
      (data)=>{
        this.bikedata=data
      }
    )
    
  }

  bikedata:any=[]

  ngOnInit(): void {
  }

}
