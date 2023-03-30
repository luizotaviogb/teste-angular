import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CpfCardComponent } from './cards/cpf-card/cpf-card.component';
import { AccountCardComponent } from './cards/account-card/account-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    OnboardingComponent,
    ProgressBarComponent,
    OnboardingFormComponent,
    CpfCardComponent,
    AccountCardComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    OnboardingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class OnboardingModule { }
