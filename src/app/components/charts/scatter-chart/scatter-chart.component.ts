import { Component } from '@angular/core';
import { ChartType, NgApexchartsModule } from 'ng-apexcharts';
import { TitleChartComponent } from '../../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../../button-doubt/button-doubt.component';

@Component({
  selector: 'app-scatter-chart',
  standalone: true,
  imports: [ NgApexchartsModule, TitleChartComponent, ButtonDoubtComponent ],
  templateUrl: './scatter-chart.component.html',
  styleUrl: './scatter-chart.component.scss'
})
export class ScatterChartComponent {
  chartData = [
    {
      name: 'Feedback vs. Confiança',
      data: [
        [10, 50], // Frequência de feedback, Índice de confiança
        [20, 60],
        [30, 70],
        [40, 65],
        [50, 75],
        [60, 80],
        [70, 85],
        [80, 90],
      ]
    },
    {
      name: 'Linha Média',
      type: 'line',
      data: [
        [10, 50], // Frequência de feedback, Índice de confiança
        [80, 90],
      ],
      marker: {
        size: 0, // Define o tamanho do marcador como 0 para ocultá-lo
      },
    }
  ];
  // Configurações do gráfico
  chartOptions = {
    chart: {
      type: 'scatter' as ChartType, // Tipo de gráfico scatter
    },
    series: this.chartData,
    xaxis: {
      title: {
        text: 'Frequência de Feedback'
      }
    },
    yaxis: {
      title: {
        text: 'Índice de Confiança'
      }
    }
  };
}
