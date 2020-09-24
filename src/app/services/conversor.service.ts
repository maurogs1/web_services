import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversor } from '../models/conversor';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private _http: HttpClient) {
  }



public cambiar(q: number, from: string, to: string):Observable<any>{

  // petición por get a esa url de un api rest
const httpOptions = {
 headers: new HttpHeaders({
 'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
 'X-RapidAPI-Key': '6571e24f3bmsh9ee2ceedf0827fcp1cc0dejsn8b06c79b8bf7'
 })
 };
 return this._http.get("https://currency-exchange.p.rapidapi.com/exchange?q="+q+"&from="+from+"&to="+to+"", httpOptions);
 }
// get('').pipe(tap(console.log))  ---> Es para ver los datos que la api devuelve
}


