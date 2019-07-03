import { TestBed } from '@angular/core/testing';

import { PokemonsService } from './pokemons.service';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: PokemonsService = TestBed.get(PokemonsService);
    expect(service).toBeTruthy();
  });
});
