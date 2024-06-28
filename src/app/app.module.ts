import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { WhatWeOfferComponent } from './components/what-we-offer/what-we-offer.component';
import { PricingPlansComponent } from './components/pricing-plans/pricing-plans.component';
import { AnimationsListComponent } from './components/animations-list/animations-list.component';
import { RevenueChartComponent } from './components/revenue-chart/revenue-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { InViewportDirective } from './components/directives/inview-directive';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WhoWeAreComponent,
    SlideshowComponent,
    WhatWeOfferComponent,
    PricingPlansComponent,
    AnimationsListComponent,
    RevenueChartComponent,
    InViewportDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({ echarts }),
    AnimateOnScrollModule



  ],
  exports:[InViewportDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
