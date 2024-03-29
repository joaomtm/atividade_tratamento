import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../../DTOs/line.details';
import { TitleChartComponent } from '../../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../../button-doubt/button-doubt.component';

enum ChartType {
  Line = "line" // Adicione outros tipos de gráficos conforme necessário
}


@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [ NgApexchartsModule, TitleChartComponent, ButtonDoubtComponent  ],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  chartData = [
    {
      name: 'Series 1',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ];
  // Configurações do gráfico
  chartOptions = {
    chart: {
      type: ChartType.Line, // Usando a enumeração para definir o tipo do gráfico
    },
    series: this.chartData,
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    }
  };
}
