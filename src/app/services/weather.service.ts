import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   

  constructor(private _http: HttpClient) {
  }
  // un Observable es una promesa, un dato que va a llegar con un determinado id
  public getTiempo(ciudad: string):Observable<any>{     
    
  // petición por get a esa url de un api rest
const httpOptions = {
 headers: new HttpHeaders({
 'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
 'X-RapidAPI-Key': '6571e24f3bmsh9ee2ceedf0827fcp1cc0dejsn8b06c79b8bf7'
 })
 }; 
 
 return this._http.get("https://community-open-weather-map.p.rapidapi.com/find?type=link%2C+accurate&units=imperial%2C+metric&q="+ciudad, httpOptions);
 }
}
