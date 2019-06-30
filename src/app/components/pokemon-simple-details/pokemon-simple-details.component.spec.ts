import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSimpleDetailsComponent } from './pokemon-simple-details.component';

describe('PokemonSimpleDetailsComponent', () => {
  let component: PokemonSimpleDetailsComponent;
  let fixture: ComponentFixture<PokemonSimpleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSimpleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSimpleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
