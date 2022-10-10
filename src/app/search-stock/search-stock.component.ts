import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { FinnhubService } from '../service/finnhub.service';

@Component({
  selector: 'app-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.css']
})
export class SearchStockComponent implements OnInit {

  stockSymobl:any;
  symbolInfo:any;
  stockInfo:any;
  stockDataObj:any =[];

  constructor(private finnhubService:FinnhubService) { }

  ngOnInit(): void {
    let dataJson:any = localStorage.getItem('stockList');
    let data:any = JSON.parse(dataJson);
    if(data.stockList.length > 0){
      this.stockDataObj = data.stockList;
    }
  }

  searchStockInfo(){
    forkJoin(this.finnhubService.getQuote(this.stockSymobl),
    this.finnhubService.searchAssets(this.stockSymobl)).subscribe((response:any)=>{
      this.stockInfo = response[0];
      this.symbolInfo = response[1].result[0];
      this.stockDataObj.unshift({
         'stockSymbol': this.symbolInfo.displaySymbol,
         'stockDesc': this.symbolInfo.description,
         'currentPrice': this.stockInfo.c,
         'openPrice': this.stockInfo.o,
         'highPrice':this.stockInfo.h,
         'percentageChange':this.stockInfo.dp,
         'itemSign':Math.sign(this.stockInfo.dp)
      })
      this.updateLocalStorage();
    });
  }

  closeItem(item:any,index:any){
    this.stockDataObj.splice(index,1);
    this.updateLocalStorage();
  }

  updateLocalStorage(){
    localStorage.setItem(
      'stockList',
      JSON.stringify({ stockList:  this.stockDataObj })
    );
  }

}
