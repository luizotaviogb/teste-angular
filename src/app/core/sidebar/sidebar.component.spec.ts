import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a logo', () => {
    const logo = fixture.nativeElement.querySelector('.sidebar-container img');
    expect(logo.src).toContain('assets/icons/logo.png');
  });

  it('should contain a search icon', () => {
    const searchIcon = fixture.nativeElement.querySelector('.sidebar-container svg.bi-search');
    expect(searchIcon).toBeTruthy();
  });

  it('should contain a star icon', () => {
    const starIcon = fixture.nativeElement.querySelector('.sidebar-container svg.bi-star');
    expect(starIcon).toBeTruthy();
  });

  it('should contain a chat icon', () => {
    const chatIcon = fixture.nativeElement.querySelector('.sidebar-container svg.bi-chat-left-dots');
    expect(chatIcon).toBeTruthy();
  });
});
