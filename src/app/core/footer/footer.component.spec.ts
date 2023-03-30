import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should hide new admission button when showNewAdmissionButton is false', () => {
    component.showNewAdmissionButton = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.btn-default.btn-footer'));
    expect(button).toBeNull();
  });

  it('should render "Dicas para abertura de conta" button', () => {
    component.showNewAdmissionButton = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.btn-transparent.btn-footer'));
    expect(button.nativeElement.textContent.trim()).toBe('Dicas para abertura de conta');
  });
});