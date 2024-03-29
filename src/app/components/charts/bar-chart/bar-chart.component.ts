import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDetails } from '../../DTOs/chart.details';
import { TitleChartComponent } from '../../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../../button-doubt/button-doubt.component';


@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [ NgApexchartsModule, TitleChartComponent, ButtonDoubtComponent ],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  chart: ChartDetails = {
    title: 'Pergunta',
    categories: ['Volkswagen do Brasil', 'B EXECUTIVE CHAIRMAN REGIAO SAM', 'B-A RELACO...AIS E GOVERNAMENTAIS', 'B-C ASSUNT...AM &SUSTENTABILIDADE', 'B-D TI - TECNOLOGIA DA INFORMACAO'],
    series: [
      {
        name: 'Nota',
        data: [85.7, 85.7, 85.2, 77.1, 84.3],
      },
    ],
  };
  series = [...this.chart.series];
  charts: any = {
    height: 350,
    type: 'bar', // O tipo 'bar' está correto, mas precisaremos ajustar as configurações do eixo para tornar o gráfico horizontal
    toolbar: {
      show: true
    }
  };
  title: any = {
    text: this.chart.title,
  };
  xaxis: any = {
    categories: this.chart.categories,
    // Quando se trata de um gráfico de barras horizontais, as categorias devem ser atribuídas ao eixo Y
  };
  yaxis: any = {
    // O eixo Y agora controlará o que costumava ser a função do eixo X em um gráfico de colunas
  };
  plotOptions: any = {
    bar: {
      horizontal: true, // Isso irá renderizar as barras horizontalmente
    }
  };
}
