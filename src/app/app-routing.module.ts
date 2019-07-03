import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';

const routes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: ':language', component: PokemonsListComponent, pathMatch: 'full' },
  {
    path: 'battle/:firstPokemon/vs/:secondPokemon',
    component: PokemonBattleComponent
  },
  {
    path: ':language/battle/:firstPokemon/vs/:secondPokemon',
    component: PokemonBattleComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
