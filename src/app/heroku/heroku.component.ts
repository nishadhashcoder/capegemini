import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-search-list',
  templateUrl: './heroku.component.html',
  styleUrls: ['./heroku.component.css']
})
export class HerokuComponent implements OnInit {
  @Input() data:any = [];
  
  
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
  
  
  
 
  constructor(private api:ApiService) {
    
    console.log(this.data)
    //console.log(this.columns)
   }
  
  

  ngOnInit(): void {
    
  }

  

}
