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
  {position: 1, name: 'No nosso setor/UO, estamos preparados para reagir com flexibilidade a mudanças ou problemas', weight: 92.9},
  {position: 2, name: 'Medidas suficientes são tomadas para assegurar a qualidade em nosso setor/UO', weight: 91.9},
  {position: 3, name: 'Gosto das minhas tarefas atuais', weight: 91.4},
  {position: 4, name: 'Em nosso setor/UO, medidas E43suficientes são tomadas para otimizar os processos', weight: 90.9},
  {position: 5, name: 'Em geral, nos últimos 12 meses, houve melhorias positivas duradouras no nosso setor/UO', weight: 90.6},
];

@Component({
  selector: 'app-table2',
  standalone: true,
  imports: [ MatTableModule, TitleChartComponent, ButtonDoubtComponent],
  templateUrl: './table2.component.html',
  styleUrl: './table2.component.scss'
})
export class Table2Component {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
}
