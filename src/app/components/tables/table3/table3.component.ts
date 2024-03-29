import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TitleChartComponent } from '../../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../../button-doubt/button-doubt.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Consigo lidar bem com a pressão e as exigências no trabalho', weight: 80.0},
  {position: 2, name: 'Eu gosto das minhas atividades atuais', weight: 80.4},
  {position: 3, name: ' Nós atingimos os objetivos de trabalho do nosso setor/UO cumprindo com regulamentos e processos', weight: 81.1},
  {position: 4, name: 'A VWB é vista positivamente pelo público e pelos nossos clientes', weight: 81.6},
  {position: 5, name: 'Questão 12', weight: 82.7},
];

@Component({
  selector: 'app-table3',
  standalone: true,
  imports: [ MatTableModule, TitleChartComponent, ButtonDoubtComponent],
  templateUrl: './table3.component.html',
  styleUrl: './table3.component.scss'
})
export class Table3Component {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
}
