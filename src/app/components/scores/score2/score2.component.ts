import { Component } from '@angular/core';
import { ChartType, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-score2',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './score2.component.html',
  styleUrl: './score2.component.scss'
})
export class Score2Component {
  donutData = [92.13, 7.87]; // Aqui, 7 é a parte e 3 é o todo
  // Corrigindo a definição do tipo do gráfico
  donutType: ChartType = 'donut';
  donutOptions = {
    series: this.donutData,
    chart: {
      type: this.donutType, // Corrigindo o tipo do gráfico
      width: '100%',
      height: 400
    },
    labels: ['Parte', 'Todo'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%'
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
}
