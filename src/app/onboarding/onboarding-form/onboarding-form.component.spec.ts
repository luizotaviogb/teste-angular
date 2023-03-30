import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OnboardingFormComponent } from './onboarding-form.component';

describe('OnboardingFormComponent', () => {
  let component: OnboardingFormComponent;
  let fixture: ComponentFixture<OnboardingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ OnboardingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate the CPF field', () => {
    const cpfControl = component.accountForm.controls['cpf'];
    expect(cpfControl.valid).toBeFalsy();

    cpfControl.setValue('12345678901');
    expect(cpfControl.valid).toBeFalsy();

    cpfControl.setValue('111.111.111-11');
    expect(cpfControl.valid).toBeFalsy();

    cpfControl.setValue('420.289.350-65');
    expect(cpfControl.valid).toBeTruthy();
  });
});
