import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Angular Material Components
//import {MatButtonModule, MatCheckboxModule, MatSlideToggleModule} from '@angular/material';
import { MaterialWrapperModule} from './material-wrapper/material-wrapper.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MaterialWrapperModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
    Test1Component
  ],
  providers: [
      /* Uncomment to use Hashtag routing
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      */
      HeroService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
