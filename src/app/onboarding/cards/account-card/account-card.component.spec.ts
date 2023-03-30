import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Account } from '../../models/accounts';
import { AccountCardComponent } from './account-card.component';

describe('AccountCardComponent', () => {
  let component: AccountCardComponent;
  let fixture: ComponentFixture<AccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCardComponent ],
      imports: [ FontAwesomeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display account information', () => {
    const account: Account = {
      accountType: 'Savings Account',
      cooperativa: 'Example Credit Union',
      accountNumber: '123456789'
    };
    component.account = account;
    fixture.detectChanges();

    const titleContainer = fixture.nativeElement.querySelector('.title-container');
    const cardTitle = titleContainer.querySelector('.card-title');
    expect(cardTitle.textContent).toContain(account.accountType);

    const label = titleContainer.querySelector('.label');
    expect(label.textContent).toContain(account.cooperativa);

    const accountNumber = fixture.nativeElement.querySelector('.horizontal:nth-of-type(2) div:nth-of-type(2)');
    expect(accountNumber.textContent).toContain(account.accountNumber);
  });
});
