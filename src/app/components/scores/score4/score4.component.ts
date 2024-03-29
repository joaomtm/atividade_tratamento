import { Component } from '@angular/core';
import { ChartType, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-score4',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './score4.component.html',
  styleUrl: './score4.component.scss'
})
export class Score4Component {
  donutData = [81.68, 18.32]; // Aqui, 7 é a parte e 3 é o todo
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
