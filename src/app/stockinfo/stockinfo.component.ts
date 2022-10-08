import { Component, OnInit } from '@angular/core';
import { Finhub } from '../finhub';
import { FinnhubService } from '../service/finnhub.service';

@Component({
  selector: 'app-stockinfo',
  templateUrl: './stockinfo.component.html',
  styleUrls: ['./stockinfo.component.css']
})
export class StockinfoComponent implements OnInit {

  constructor(private finnhubService: FinnhubService) { }
  todo: any;
  search = "";
  finhub: Finhub[] = [];

  ngOnInit(): void {

     this.finnhubService.searchAssets(this.search).subscribe((finhubData) => 
      {
        this.todo = finhubData;
        console.log(finhubData);
        this.getQuote(this.search);
        
      })
  }

  getQuote(symbol: string) {
    
      this.finnhubService.getQuote(symbol).subscribe((finhubsymbol) => 
      {
        console.log(finhubsymbol);
        
      })
    
  }

}
