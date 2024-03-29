import { Component } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDetails } from '../../DTOs/chart.details';
import { TitleChartComponent } from '../../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../../button-doubt/button-doubt.component';
import { SectionTwoSaudeComponent } from "../../section-two-saude/section-two-saude.component";

@Component({
    selector: 'app-column-factory-chart',
    standalone: true,
    templateUrl: './column-factory-chart.component.html',
    styleUrl: './column-factory-chart.component.scss',
    imports: [ChartsComponent, NgApexchartsModule, TitleChartComponent, ButtonDoubtComponent, SectionTwoSaudeComponent]
})
export class ColumnFactoryChartComponent {
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
    width: 500,
    type: 'bar',
  };
  title: any = {
    text: this.chart.title,
  };
  xaxis: any = {
    categories: this.chart.categories,
  }; 
}