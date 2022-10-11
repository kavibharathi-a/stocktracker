export interface stockSymobl {
    displaySymbol: string;
    description: string;
    }
    
   export interface stockSymoblInfo {
    c: string;
    o: string;
    h:string;
    dp:string;
   }

   export interface stockDataObj {
    'stockSymbol': string;
    'stockDesc': string;
    'currentPrice': string;
    'openPrice': string;
    'highPrice':string;
    'percentageChange':string;
    'itemSign':number
  }

  export interface insiderInfo {
    'year': string;
    'month': string;
    'change': string;
    'mspr': string;
    'itemSign':number;
  }
 
 
  
