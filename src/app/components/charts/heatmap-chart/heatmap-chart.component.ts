import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TitleChartComponent } from '../../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../../button-doubt/button-doubt.component';

// Enumeração para os tipos de gráficos
enum ChartType {
  Heatmap = "heatmap" // Adicione outros tipos de gráficos conforme necessário
}

@Component({
  selector: 'app-heatmap-chart',
  standalone: true,
  imports: [ NgApexchartsModule, TitleChartComponent, ButtonDoubtComponent ],
  templateUrl: './heatmap-chart.component.html',
  styleUrl: './heatmap-chart.component.scss'
})
export class HeatmapChartComponent {
  chartData = [
    {
      name: 'Credibilidade',
      data: [
        { x: '10:00', y: 10 },
        { x: '11:00', y: 20 },
        { x: '12:00', y: 15 },
        { x: '13:00', y: 13 },
        { x: '14:00', y: 12 },
        { x: '15:00', y: 17 },
        { x: '16:00', y: 18 },
        { x: '17:00', y: 19 },
        { x: '18:00', y: 29 },
        { x: '19:00', y: 26 },
        { x: '20:00', y: 12 },
        { x: '21:00', y: 13 },
        { x: '22:00', y: 17 },
        // Adicione mais dados conforme necessário
      ]
    },
    {
      name: 'Respeito',
      data: [
        { x: '10:00', y: 25 },
        { x: '11:00', y: 30 },
        { x: '12:00', y: 20 },
        { x: '13:00', y: 13 },
        { x: '14:00', y: 12 },
        { x: '15:00', y: 17 },
        { x: '16:00', y: 18 },
        { x: '17:00', y: 19 },
        { x: '18:00', y: 29 },
        { x: '19:00', y: 26 },
        { x: '20:00', y: 12 },
        { x: '21:00', y: 13 },
        { x: '22:00', y: 17 },
        // Adicione mais dados conforme necessário
      ]
    },
    {
      name: 'Imparcialidade',
      data: [
        { x: '10:00', y: 25 },
        { x: '11:00', y: 30 },
        { x: '12:00', y: 20 },
        { x: '13:00', y: 13 },
        { x: '14:00', y: 12 },
        { x: '15:00', y: 17 },
        { x: '16:00', y: 18 },
        { x: '17:00', y: 19 },
        { x: '18:00', y: 29 },
        { x: '19:00', y: 26 },
        { x: '20:00', y: 12 },
        { x: '21:00', y: 13 },
        { x: '22:00', y: 17 },
        // Adicione mais dados conforme necessário
      ]
    },
    {
      name: 'Orgulho',
      data: [
        { x: '10:00', y: 25 },
        { x: '11:00', y: 30 },
        { x: '12:00', y: 20 },
        { x: '13:00', y: 13 },
        { x: '14:00', y: 12 },
        { x: '15:00', y: 17 },
        { x: '16:00', y: 18 },
        { x: '17:00', y: 19 },
        { x: '18:00', y: 29 },
        { x: '19:00', y: 26 },
        { x: '20:00', y: 12 },
        { x: '21:00', y: 13 },
        { x: '22:00', y: 17 },
        // Adicione mais dados conforme necessário
      ]
    },
    {
      name: 'Camaradagem',
      data: [
        { x: '10:00', y: 25 },
        { x: '11:00', y: 30 },
        { x: '12:00', y: 20 },
        { x: '13:00', y: 13 },
        { x: '14:00', y: 12 },
        { x: '15:00', y: 17 },
        { x: '16:00', y: 18 },
        { x: '17:00', y: 19 },
        { x: '18:00', y: 29 },
        { x: '19:00', y: 26 },
        { x: '20:00', y: 12 },
        { x: '21:00', y: 13 },
        { x: '22:00', y: 17 },
        // Adicione mais dados conforme necessário
      ]
    }
    // Adicione mais dias conforme necessário
  ];

  // Configurações do gráfico
  chartOptions = {
    chart: {
      type: ChartType.Heatmap, // Aqui estamos usando a enumeração
    },
    title: {
      text: 'Heatmap Title' // Adicione o título aqui
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    xaxis: {
      type: 'category' as const, // Define o tipo como 'category'
    },
  };
}
