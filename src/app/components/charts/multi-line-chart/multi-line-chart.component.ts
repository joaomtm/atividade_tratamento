import { Component } from '@angular/core';
import { ChartType, NgApexchartsModule } from 'ng-apexcharts';
import { TitleChartComponent } from '../../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../../button-doubt/button-doubt.component';

@Component({
  selector: 'app-multi-line-chart',
  standalone: true,
  imports: [ NgApexchartsModule, TitleChartComponent, ButtonDoubtComponent ],
  templateUrl: './multi-line-chart.component.html',
  styleUrl: './multi-line-chart.component.scss'
})
export class MultiLineChartComponent {
  chartData = [
    {
      name: '2022',
      data: [81.5,
        86.2,
        82.7,
        83.0,
        84.9,
        86.4,
        81.6,
        91.0,
        86.0,
        86.5,
        86.6,
        83.9,
        85.8,
        91.9,
        84.8,
        84.5,
        86.3,
        91.1,
        91.5,
        93.6,
        84.1,
        92.3,
        91.8,
        85.7]
    },
    {
      name: '2023',
      data: [80.4,
        85.4,
        81.1,
        81.6,
        83.8,
        84.9,
        80.0,
        89.6,
        84.8,
        85.6,
        85.9,
        82.7,
        84.7,
        91.4,
        84.1,
        83.7,
        85.6,
        90.5,
        90.9,
        92.9,
        83.0,
        91.9,
        90.6,
        84.6]
    }
  ];
  chartOptions: ChartOptions = {
    chart: {
      type: 'line',
      height: 350
    },
    series: this.chartData,
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    }
  };
}
interface ChartOptions {
  chart: {
    type: ChartType;
    height: number;
  };
  series: {
    name: string;
    data: number[];
  }[];
  xaxis: {
    categories: number[];
  };
}
