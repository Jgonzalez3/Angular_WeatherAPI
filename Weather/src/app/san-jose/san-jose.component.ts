import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  city: string;
  humidity: number;
  tempavg: number;
  temphigh: number;
  templow: number;
  status: string;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showSanJose();
  }
  showSanJose(){
    let observable = this._httpService.getSanJose();
    observable.subscribe(data=>{
      console.log("Got data",data);
      this.city = data['name'];
      this.status = data['weather'][0]['description'];
      this.tempavg = this.KelvinToTemp(data['main']['temp']);
      this.temphigh = this.KelvinToTemp(data['main']['temp_max']);
      this.templow = this.KelvinToTemp(data['main']['temp_min']);
      this.humidity = data['main']['humidity']
    })
  }
  KelvinToTemp(temp){
    let F = temp * 9/5 - 459.67;
    return Math.round(F);
  }
}
