import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create NavbarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should defineLanguageByRoute', () => {
    component.defineLanguageByRoute('es');
    expect(component.currentLanguage).toEqual(1);
    component.defineLanguageByRoute('fr');
    expect(component.currentLanguage).toEqual(2);
  });

  it('should render Navbar', () => {
    const navbarComponent: HTMLElement = fixture.nativeElement;
    const row = navbarComponent.querySelector('.row');
    expect(row).toBeTruthy();
    const images = navbarComponent.querySelectorAll('img');
    expect(images.length).toEqual(3);
  });
});
