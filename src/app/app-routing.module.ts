import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchStockComponent } from './search-stock/search-stock.component';
import { StockinfoComponent } from './stockinfo/stockinfo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'searchStock',
    pathMatch: 'full',
  },
  {
    path: 'searchStock',
    component: SearchStockComponent
  },
  {
    path: 'searchStock/:symbol',
    component: StockinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
