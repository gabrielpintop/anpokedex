import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonModalDetailsComponent } from './pokemon-modal-details.component';

describe('PokemonModalDetailsComponent', () => {
  let component: PokemonModalDetailsComponent;
  let fixture: ComponentFixture<PokemonModalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonModalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonModalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
