import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinnhubService } from '../service/finnhub.service';

@Component({
  selector: 'app-stockinfo',
  templateUrl: './stockinfo.component.html',
  styleUrls: ['./stockinfo.component.css']
})
export class StockinfoComponent implements OnInit {
  symbol: any;
  insiderInfo: any=[];
  title: any;

  constructor(private finnhubService: FinnhubService,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.symbol = routeParams['symbol'];
      this.getInsideInfo();
    });
  }

  getInsideInfo(){
    this.finnhubService.getInsider(this.symbol).subscribe((response:any)=>{
       this.insiderInfo = response.data;
       this.title = response.symbol;
       this.insiderInfo.forEach((element:any) => {
        element.itemSign = Math.sign(element.change);
       });
    })
  }
}
