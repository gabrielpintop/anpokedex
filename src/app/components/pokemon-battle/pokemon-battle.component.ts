import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { environment } from 'src/environments/environment';
import { TitleCasePipe } from '@angular/common';
import { Stat } from 'src/app/interfaces/pokemonStat';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.scss']
})
export class PokemonBattleComponent implements OnInit {
  public attacker = 0;

  public attackerMoves = [];

  public defender = 1;

  public endedGame = false;

  public firstPokemonName: string;

  public loading = true;

  public messageToShow = '';

  public pokemonFighters: Pokemon[] = [];

  public pokemonsLife = [0, 0];

  public secondPokemonName: string;

  public showAttacks = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService
  ) {
    this.firstPokemonName = this.activatedRoute.snapshot.params.firstPokemon;
    this.secondPokemonName = this.activatedRoute.snapshot.params.secondPokemon;
  }

  ngOnInit() {
    this.loadPokemonsInformation();
  }

  // Executes and attack on the deffender Pokemon
  attack(attack) {
    this.showAttacks = false;
    this.messageToShow = `<b>${this.getTitleCaseText(
      this.pokemonFighters[this.attacker].name
    )}</b> used <b>${attack.move}</b> and removed <b>${
      attack.attack
    }</b> health points from <b>${this.getTitleCaseText(
      this.pokemonFighters[this.defender].name
    )}</b>`;
    setTimeout(() => {
      const defenderLife = this.pokemonsLife[this.defender] - attack.attack;
      if (defenderLife < 0) {
        this.pokemonsLife[this.defender] = 0;
        alert(
          `${this.getTitleCaseText(
            this.pokemonFighters[this.attacker].name
          )} won!`
        );
        this.endedGame = true;
      } else {
        this.pokemonsLife[this.defender] = defenderLife;
        const until = this.attacker;
        this.attacker = this.defender;
        this.defender = until;
        this.generateAttackerMoves();
      }
    }, 3000);
  }

  // Loads the initial game configurations
  loadInitialGame() {
    this.endedGame = false;
    this.pokemonsLife[0] = this.findPokemonHp(this.pokemonFighters[0].stats);
    this.pokemonsLife[1] = this.findPokemonHp(this.pokemonFighters[1].stats);
    this.generateAttackerMoves();
  }

  // Loads the information of the Pokemons that are going to fight
  loadPokemonsInformation() {
    this.pokemonsService
      .getPokemonFightersInformation(
        this.firstPokemonName,
        this.secondPokemonName
      )
      .then((pokemonFighters: Pokemon[]) => {
        this.pokemonFighters = pokemonFighters;
        this.loadInitialGame();
        this.loading = false;
      })
      .catch(err => {
        alert(err);
        this.router.navigate(['/']);
      });
  }

  // Gets the url of the Pokemon image
  getImageUrl(pokemonId: number, back: string): string {
    return `${environment.pokeApiImagesUrl}${back}${pokemonId}.png`;
  }

  // Generates a set of 4 moves for the attacker
  generateAttackerMoves() {
    this.attackerMoves = [];
    const moves = this.pokemonFighters[this.attacker].moves;
    const movesLength = moves.length;
    if (movesLength === 0) {
      this.addMoveToAttackerArray('Fist');
    } else if (movesLength <= 4) {
      moves.map(move => {
        this.addMoveToAttackerArray(this.getTitleCaseText(move.move.name));
      });
    } else {
      let position = 0;
      const selectedMoves = [];
      while (selectedMoves.length < 4) {
        position = Math.floor(Math.random() * (movesLength - 1)) + 1;
        if (selectedMoves.indexOf(position) === -1) {
          selectedMoves.push(position);
          this.addMoveToAttackerArray(
            this.getTitleCaseText(moves[position].move.name)
          );
        }
      }
    }
    this.messageToShow = '';
    this.showAttacks = true;
  }

  // Finds the Pokemon health points
  findPokemonHp(pokemonStats: Stat[]) {
    const hpStat = pokemonStats.find(
      pokemonStat => pokemonStat.stat.name === 'hp'
    );
    if (hpStat) {
      return hpStat.base_stat;
    } else {
      return 40;
    }
  }

  // Gets a text as Title pipe
  getTitleCaseText(text): string {
    return new TitleCasePipe().transform(text);
  }

  // Adds a move to the array of moves of the attacker
  addMoveToAttackerArray(moveName) {
    this.attackerMoves.push({
      move: moveName,
      attack: Math.floor(Math.random() * 10) + 1
    });
  }
}
