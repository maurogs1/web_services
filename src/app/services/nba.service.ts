import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor(private _http: HttpClient) {


  }
// un Observable es una promesa, un dato que va a llegar con un determinado id
  public getTeams():Observable<any>{

  // petición por get a esa url de un api rest
const httpOptions = {
  headers: new HttpHeaders({
  'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  'X-RapidAPI-Key': '6571e24f3bmsh9ee2ceedf0827fcp1cc0dejsn8b06c79b8bf7'
  })
  };
  return this._http.get("https://free-nba.p.rapidapi.com/teams", httpOptions);
  }

  public getJugadores():Observable<any>{

    // petición por get a esa url de un api rest
  const httpOptions = {
    headers: new HttpHeaders({
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    'X-RapidAPI-Key': '6571e24f3bmsh9ee2ceedf0827fcp1cc0dejsn8b06c79b8bf7'
    })
    };
    return this._http.get("https://free-nba.p.rapidapi.com/players?page=0&per_page=100", httpOptions);
    }

}
