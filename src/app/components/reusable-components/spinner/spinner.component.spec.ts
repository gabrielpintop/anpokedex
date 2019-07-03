import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from './spinner.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [SpinnerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SpinnerComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a fa-icon element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('fa-icon')).toBeTruthy();
  });
});
