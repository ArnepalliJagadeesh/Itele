import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HowItWorksAndFeaturesComponent } from './how-it-works-and-features/how-it-works-and-features.component';
import { NumberSearchComponent } from './number-search/number-search.component';
import { PaymentComponent } from './payment/payment.component';
import { PricingAndPlansComponent } from './pricing-and-plans/pricing-and-plans.component';
import {FormsModule} from '@angular/forms';
import { HighlightSearch} from './Pipes/highlight';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowItWorksAndFeaturesComponent,
    NumberSearchComponent,
    PaymentComponent,
    PricingAndPlansComponent,
    HighlightSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
