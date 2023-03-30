import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { OnboardingService } from './services/onboarding.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  user: User | undefined
  showAccountNotFound: boolean = false
  public loading: boolean = false

  constructor(
    private onboardingService: OnboardingService
  ) { }

  ngOnInit(): void {
  }

  getUserData(cpf: string) {
    this.loading = true
    setTimeout(() => {
      let user = this.onboardingService.getUserData(cpf)
      if (user.cpfSituation) {
        this.user = user
        this.showAccountNotFound = false
      } else {
        this.user = user
        this.showAccountNotFound = true
      }
      this.loading = false
    }, 1000);
  }
}
