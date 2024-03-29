import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TitleChartComponent } from '../../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../../button-doubt/button-doubt.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  weight2: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'B-OIE ENGENH...INDUSTRIAL CENTRAL', weight: 100, weight2: 100},
  {position: 2, name: 'B-OTM-1*1-3 MANUT ...ANICA TBT 3T', weight: 100, weight2: 0},
  {position: 3, name: 'B-QTP-1 QA PEC...RIES - TASKFORCE', weight: 99.8, weight2: 0},
  {position: 4, name: 'B-SMS PECAS ESTAMPADAS', weight: 99.8, weight2: 95.7},
  {position: 5, name: 'B-QRM QA PEC...S METALICO ZP5-ZP7', weight: 99.7, weight2: 0},
];

@Component({
  selector: 'app-table1',
  standalone: true,
  imports: [ MatTableModule, TitleChartComponent, ButtonDoubtComponent],
  templateUrl: './table1.component.html',
  styleUrl: './table1.component.scss'
})
export class Table1Component {
  displayedColumns: string[] = ['position', 'name', 'weight', 'weight2'];
  dataSource = ELEMENT_DATA;
}
