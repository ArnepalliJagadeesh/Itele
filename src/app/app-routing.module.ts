import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { HowItWorksAndFeaturesComponent } from './how-it-works-and-features/how-it-works-and-features.component';
import { PricingAndPlansComponent } from './pricing-and-plans/pricing-and-plans.component';
import { NumberSearchComponent } from './number-search/number-search.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  { path: 'How-It-Works-And-Features', component: HowItWorksAndFeaturesComponent },
  { path: 'Pricing-And-Plans', component: PricingAndPlansComponent },
  { path: 'Number-Search', component: NumberSearchComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
