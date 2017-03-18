import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { GamesModule } from './games/games.module';

@NgModule({
  imports:      [BrowserModule,
                  HttpModule,
                  FormsModule,
                  GamesModule,
                  RouterModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
