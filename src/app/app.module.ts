import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from 'clarity-angular';
import { CurrencyPipe } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { TickerComponent } from './ticker/ticker.component';
import { StocksComponent } from './stocks/stocks.component';
import { AlertComponent } from './alert/alert.component';

import { StocksInterceptor } from './services/interceptor.service';
import { LocalStorageService } from './services/local-storage.service';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
        InvestmentsComponent,
        TickerComponent,
        StocksComponent,
        AlertComponent,
        ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ClarityModule,
        HttpClientModule,
       ],
  providers: [
        LocalStorageService,
        CurrencyPipe,
        AccountService,
        {provide: HTTP_INTERCEPTORS,
         useClass: StocksInterceptor,
         multi: true 

        }
       ],
  bootstrap: [AppComponent]
})
export class AppModule { }
