import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { Finhub, Finhubdata } from '../finhub';
import { FinnhubService } from '../service/finnhub.service';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  private searchTerms = new Subject<string>();
  
  
  constructor(private finnhubService: FinnhubService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  
  todo!: Observable<Finhubdata>;
  finhub: Finhub[] = [];
  finhubsymbol = {} as Finhub;
  ngOnInit(): void {

    this.todo = this.searchTerms.pipe(
      

      

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.finnhubService.searchAssets(term)),
    );

    
    
  }

  
    onGetAssets(search: string) {
    
      this.finnhubService.searchAssets(search).subscribe((finhubData) => 
      {
        //this.finhub = finhubData;
        console.log(finhubData);
        this.getQuote(search);
        
      })
      
    
  }

  getQuote(symbol: string) {
    
      this.finnhubService.getQuote(symbol).subscribe((finhubsymbol) => 
      {
        console.log(finhubsymbol);
        
      })
    
  }

}
