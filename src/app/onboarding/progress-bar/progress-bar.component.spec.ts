import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have first item with "step active-step" class and the rest with "step" class', () => {
    const progressBar = fixture.nativeElement.querySelector('.stepper');
    const steps = progressBar.querySelectorAll('.step');

    expect(steps[0].classList).toContain('step');
    expect(steps[0].classList).toContain('active-step');

    for(let i=1; i<steps.length; i++) {
      expect(steps[i].classList).toContain('step');
      expect(steps[i].classList).not.toContain('active-step');
    }
  });

});