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

  it('should emit formData when form is submitted with a valid CPF', () => {
    // simulate user input
    component.accountForm.controls['cpf'].setValue('100.466.269-64');
    // spy on formData event emitter
    spyOn(component.formData, 'emit');
    // simulate form submission
    component.submitForm();
    // expect formData event emitter to have been called with the correct value
    expect(component.formData.emit).toHaveBeenCalledWith('100.466.269-64');
  });
  
  it('should disable submit button when form is invalid', () => {
    // simulate user input
    component.accountForm.controls['cpf'].setValue('invalid-cpf');
    // expect submit button to be disabled
    const submitButton = fixture.nativeElement.querySelector('#submit-button');
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should format CPF input correctly', () => {
    // simulate user input
    component.accountForm.controls['cpf'].setValue('12345678901');
    // expect CPF input to be formatted correctly
    expect(component.accountForm.controls['cpf'].value).toBe('123.456.789-01');
  });

  
  it('should display error message when CPF is invalid', () => {
    // simulate user input
    component.accountForm.controls['cpf'].setValue('invalid-cpf');
    component.accountForm.controls['cpf'].markAsTouched();
    fixture.detectChanges();
    // expect error message to be displayed
    const errorMessage = fixture.nativeElement.querySelector('#cpfErrorMessage');
    expect(errorMessage).toBeTruthy();
  });
  
  it('should not display error message when CPF is valid', () => {
    // simulate user input
    component.accountForm.controls['cpf'].setValue('100.466.269-64');
    component.accountForm.controls['cpf'].markAsTouched();
    fixture.detectChanges();
    // expect error message not to be displayed
    const errorMessage = fixture.nativeElement.querySelector('#cpfErrorMessage');
    expect(errorMessage).toBeFalsy();
  });
  
  
});
