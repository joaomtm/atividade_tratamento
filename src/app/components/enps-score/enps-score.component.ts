import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-enps-score',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './enps-score.component.html',
  styleUrl: './enps-score.component.scss'
})
export class EnpsScoreComponent {
  score: number = 63; // Valor atual do eNPS
  lastYearScore: number = 53; // Valor do eNPS do ano anterior
}
