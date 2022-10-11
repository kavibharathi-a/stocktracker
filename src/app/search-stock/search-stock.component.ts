import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { stockDataObj, stockSymobl, stockSymoblInfo } from '../finhub';
import { FinnhubService } from '../service/finnhub.service';

@Component({
  selector: 'app-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.css']
})
export class SearchStockComponent implements OnInit {

  stockSymobl:string ='';
  symbolInfo:stockSymobl = {
    displaySymbol: '',
    description: ''
    }
  stockInfo:stockSymoblInfo =  {
    c: '',
    o: '',
    h:'',
    dp:''
    }
  stockDataObj:Array<stockDataObj>  =[];

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
         'itemSign':Math.sign(Number(this.stockInfo.dp))
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
