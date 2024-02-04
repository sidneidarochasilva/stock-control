import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import {CardModule} from 'primeng/card'
import {InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from 'primeng/button'
import {ToastModule} from 'primeng/toast'

import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './modules/home/home.component'
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
//import { ProductsHomeComponent } from './modules/products/page/products-home/products-home.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //ProductsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //PRIME NG
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ],
  providers: [CookieService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
