import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-heroku',
  templateUrl: './heroku.component.html',
  styleUrls: ['./heroku.component.css']
})
export class HerokuComponent implements OnInit {
  
 headingComponent = "Audit logs";
 email="email";
 phone="phone";
 name="name";
 fromDate:any;
 toDate:any;
 apiData:any= [];
 apiDataName:any =[];
 roomsFilter:any;
  searchText: any;
 
  
  
 
  constructor(private api:ApiService) { }
  
  

  ngOnInit(): void {
    this.api.getApiData().subscribe((data=>{
      this.apiData=data;
      this.apiData.forEach((element: {email: any; name:any ;phone:any;},index:any) => {
        this.apiDataName[index]=element;

      });
    }))
  }

  

}
