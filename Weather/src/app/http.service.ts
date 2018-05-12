import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getSeattle(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=7487c1dfde39f4991c9a0f0194151f48')
  }
  getBurbank(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Burbank&APPID=7487c1dfde39f4991c9a0f0194151f48')
  }
  getSanJose(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=San+Jose,US&APPID=7487c1dfde39f4991c9a0f0194151f48')
  }
  getChicago(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=7487c1dfde39f4991c9a0f0194151f48')
  }
  getDallas(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Dallas&APPID=7487c1dfde39f4991c9a0f0194151f48')
  }
  getDC(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=washington&APPID=7487c1dfde39f4991c9a0f0194151f48')
  }
}
