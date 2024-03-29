import { Component, ViewChild, AfterViewInit, OnInit, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { TitleChartComponent } from '../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../button-doubt/button-doubt.component';
import { ApiconnectService } from '../../services/apiconnect.service';
import { Stiba } from '../../services/DTOs/Stiba';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ CommonModule, MatTableModule, TitleChartComponent, ButtonDoubtComponent ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
}