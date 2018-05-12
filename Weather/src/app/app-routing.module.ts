import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DCComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {path: 'SanJose', component: SanJoseComponent},
  {path: 'Seattle', component: SeattleComponent},
  {path: 'Burbank', component: BurbankComponent},
  {path: 'Dallas', component: DallasComponent},
  {path: 'DC', component: DCComponent},
  {path: 'Chicago', component: ChicagoComponent},
  {path: '', pathMatch: 'full', redirectTo: '/Seattle'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
