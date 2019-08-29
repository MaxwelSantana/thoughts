import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThoughtsModule } from './thoughts/thoughts.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockRequestInterceptor } from './interceptors/mock.interceptor';

import { environment } from '../environments/environment';
import { HttpRequestInterceptor } from './interceptors/interceptor';

import { HttpClientModule } from '@angular/common/http'; 

export const isProd = environment.production;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    ThoughtsModule
  ],
  providers: [
    {
         provide: HTTP_INTERCEPTORS,
         useClass: isProd ? HttpRequestInterceptor : HttpMockRequestInterceptor,
         multi: true
         }
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
