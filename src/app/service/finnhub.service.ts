import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Finhubdata } from '../finhub';
@Injectable({
  providedIn: 'root'
})
export class FinnhubService {

  constructor(private http: HttpClient) { }

  configUrl = "https://finnhub.io/api/v1/";
  token = "bu4f8kn48v6uehqi3cqg";

  searchAssets(search: string): Observable<Finhubdata> { 
    return this.http.get<Finhubdata>(this.configUrl + "search?q=" + search +"&symbol=" + search + "&token=" + this.token);
  }

  getQuote(symbol: string) {
    return this.http.get(this.configUrl + "quote?symbol=" + symbol + "&token=" + this.token
    );
  }

  getInsider(symbol: string){
    // let from = new Date()
    return this.http.get(this.configUrl + "stock/insider-sentiment?symbol=" + symbol+ "&token=" + this.token+"&from=2021-01-01&to=2022-03-01"
    );
  }
}
