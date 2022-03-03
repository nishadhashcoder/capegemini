import { Component } from '@angular/core';
import { ApiService } from '../app/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroku App';
  apiData:any= [];
  apiDataName:any =[];
  column:any =["email", "name", "phone"];
  constructor(private api:ApiService) {
    this.api.getApiData().subscribe((data=>{
      this.apiData=data;
      this.apiData.forEach((element: {email: any; name:any ;phone:any;},index:any) => {
        this.apiDataName[index]=element;
        
        //this.column = element.keys()
      });
    }))
    
   
   }
}
