import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpfCardComponent } from './cpf-card.component';
import { User } from '../../models/user';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('CpfCardComponent', () => {
  let component: CpfCardComponent;
  let fixture: ComponentFixture<CpfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfCardComponent ],
      imports: [ FontAwesomeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display user name', () => {
    const user: User = {
      name: "John Doe",
      cpf: "123.456.789-00",
      cpfSituation: true,
      accounts: []
    };
    component.user = user;
    fixture.detectChanges();
    const nameElement = fixture.nativeElement.querySelector('#name');
    expect(nameElement.textContent).toContain(user.name);
  });

  it('should display regular cpf situation', () => {
    const user: User = {
      name: "John Doe",
      cpf: "123.456.789-00",
      cpfSituation: true,
      accounts: []
    };
    component.user = user;
    fixture.detectChanges();
    const situationElement = fixture.nativeElement.querySelector('.horizontal:last-child');
    expect(situationElement.textContent).toContain('Regular');
    expect(situationElement.querySelector('.success-check')).toBeTruthy();
  });

  it('should display irregular cpf situation', () => {
    const user: User = {
      name: "John Doe",
      cpf: "123.456.789-00",
      cpfSituation: false,
      accounts: []
    };
    component.user = user;
    fixture.detectChanges();
    const situationElement = fixture.nativeElement.querySelector('.horizontal:last-child');
    expect(situationElement.textContent).toContain('Irregular');
    expect(situationElement.querySelector('.error')).toBeTruthy();
  });
});
