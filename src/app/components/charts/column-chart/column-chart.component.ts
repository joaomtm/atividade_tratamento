import { Component } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDetails } from '../../DTOs/chart.details';
import { TitleChartComponent } from '../../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../../button-doubt/button-doubt.component';

@Component({
  selector: 'app-column-chart',
  standalone: true,
  imports: [ ChartsComponent, NgApexchartsModule, TitleChartComponent, ButtonDoubtComponent ],
  templateUrl: './column-chart.component.html',
  styleUrl: './column-chart.component.scss'
})
export class ColumnChartComponent {
  chart: ChartDetails = {
    title: 'Lançamento de carros por ano',
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
    series: [
      {
        name: 'Carros por ano',
        data: [5, 10, 8, 6, 5],
      },
    ],
  };
  series = [...this.chart.series];
  charts: any = {
    height: 350,
    type: 'bar',
  };
  title: any = {
    text: this.chart.title,
  };
  xaxis: any = {
    categories: this.chart.categories,
  }; 
}
