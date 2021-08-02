import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {InputMaskModule} from 'primeng/inputmask';
import {SelectButtonModule} from 'primeng/selectbutton';
import { AppRoutingModule } from './app-routing.module';
import { WineryComponent } from './winery/winery.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';


@NgModule({
  declarations: [
    AppComponent,
    WineryComponent,
    ProductComponent,
    AccessDeniedComponent,
    UnderMaintenanceComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputMaskModule,  
    FormsModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
