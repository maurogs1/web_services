import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Traductor } from '../models/traductor';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private _http: HttpClient ) { }
  public traducir(source: string, target: string, input: string):Observable <any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'systran-systran-platform-for-language-processing-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '6571e24f3bmsh9ee2ceedf0827fcp1cc0dejsn8b06c79b8bf7'
      })
    }
return this._http.get("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source="+source+"&target="+target+"&input="+input+" ", httpOptions);
  }
}


