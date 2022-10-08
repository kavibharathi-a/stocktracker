import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Finhub, Finhubdata } from '../finhub';
@Injectable({
  providedIn: 'root'
})
export class FinnhubService {

  constructor(private http: HttpClient) { }

  configUrl = "https://finnhub.io/api/v1/";
  token = "bu4f8kn48v6uehqi3cqg";

  searchAssets(search: string): Observable<Finhubdata> { 
    return this.http.get<Finhubdata>(this.configUrl + "search?q=" + search + "&token=" + this.token);
  }

  getQuote(symbol: string) {
    return this.http.get(this.configUrl + "quote?symbol=" + symbol + "&token=" + this.token
    );
  }
}
