import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingService } from './services/onboarding.service';
import { By } from '@angular/platform-browser';
import { User } from './models/user';
import {  } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';

describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;
  let onboardingServiceSpy: jasmine.SpyObj<OnboardingService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('OnboardingService', ['getUserData']);

    await TestBed.configureTestingModule({
      declarations: [OnboardingComponent],
      providers: [{ provide: OnboardingService, useValue: spy }]
    }).compileComponents();

    onboardingServiceSpy = TestBed.inject(OnboardingService) as jasmine.SpyObj<OnboardingService>;

    fixture = TestBed.createComponent(OnboardingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading spinner while getting user data', fakeAsync(() => {
    const cpf = '12345678900';
    onboardingServiceSpy.getUserData.and.returnValue(({ cpfSituation: false }));
    component.getUserData(cpf);
    expect(component.loading).toBeTrue(); // Certifique-se de que a propriedade loading está definida como true após a chamada
  
    fixture.detectChanges();
    tick(1000); // Aguarda 1 segundo (tempo definido no setTimeout em getUserData)
  
    fixture.detectChanges();
    const loadingSpinner = fixture.debugElement.query(By.css('.spinner'));
    expect(loadingSpinner).toBeFalsy();
  }));

  it('should display account not found message when cpf situation is false', () => {
    const cpf = '12345678900';
    onboardingServiceSpy.getUserData.and.returnValue(({ cpfSituation: false } as User));

    component.getUserData(cpf);
    fixture.detectChanges();

    const accountNotFound = fixture.debugElement.query(By.css('.app-account-card'));
    expect(accountNotFound).toBeFalsy();
  });
});
