import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct header title', () => {
    const headerTitle = fixture.nativeElement.querySelector('.header-title');
    expect(headerTitle.textContent).toContain('NOVA ADMISSÃO COOPERADO');
  });

  it('should have correct header sub title', () => {
    const headerSubTitle = fixture.nativeElement.querySelector('.header-sub-title');
    expect(headerSubTitle.textContent).toContain('Cadastro / Admissão do Cooperado / Nova Admissão de Cooperado');
  });

  it('should have Bell icon', () => {
    const bellIcon = fixture.nativeElement.querySelector('.fa-bell');
    expect(bellIcon).toBeTruthy();
  });

  it('should have Cog icon', () => {
    const cogIcon = fixture.nativeElement.querySelector('.fa-cog');
    expect(cogIcon).toBeTruthy();
  });

  it('should have profile picture icon', () => {
    const profilePicture = fixture.nativeElement.querySelector('img');
    expect(profilePicture).toBeTruthy();
    expect(profilePicture.getAttribute('alt')).toBe('profile-picture');
  });

  it('should have Viacredi button', () => {
    const viacrediButton = fixture.nativeElement.querySelector('.button-header');
    expect(viacrediButton.textContent).toContain('VIACREDI');
  });
});
