import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Stat } from 'src/app/interfaces/pokemonStat';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-stats-chart',
  templateUrl: './pokemon-stats-chart.component.html',
  styleUrls: ['./pokemon-stats-chart.component.scss']
})
export class PokemonStatsChartComponent implements OnInit {
  @Input() pokemonName: string;

  @Input() pokemonStats: Stat[];

  public radarChartData: ChartDataSets[] = [{ data: [], label: '' }];

  public radarChartLabels: Label[] = [];

  public radarChartOptions: RadialChartOptions = {
    responsive: true
  };

  public radarChartType: ChartType = 'radar';

  constructor() {}

  ngOnInit() {
    if (this.pokemonStats) {
      this.loadPokemonStats();
    }
  }

  // Gets the name with the title case pipe
  getTitleCasePipe(statName: string) {
    return new TitleCasePipe().transform(statName);
  }

  // Loads the pokemon stats in the corresponding format for the chart
  loadPokemonStats() {
    this.radarChartData[0].label = this.pokemonName + ' stats';

    this.pokemonStats.map((stat: Stat) => {
      this.radarChartLabels.push(this.getTitleCasePipe(stat.stat.name));
      this.radarChartData[0].data.push(stat.base_stat);
    });
  }
}
