import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingRoutingModule } from './onboarding/onboarding-routing.module';
import { OnboardingModule } from './onboarding/onboarding.module';

const routes: Routes = [
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingModule)
  },
  {
    path: '',
    redirectTo: '/onboarding',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), OnboardingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
