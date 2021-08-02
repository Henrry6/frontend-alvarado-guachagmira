import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { WineryComponent } from './winery/winery.component';

const routes: Routes = [
  {
    path:'wineries',
    component: WineryComponent
  },
  {
    path:'products',
    component: ProductComponent
  },
  {
    path: '**',
    redirectTo: '/wineries'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
