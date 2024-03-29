import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NoteStibaService } from '../../services/note-stiba.service';

@Component({
  selector: 'app-kpi-note',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './kpi-note.component.html',
  styleUrl: './kpi-note.component.scss'
})
export class KpiNoteComponent implements OnInit  {
  /*
  score: number = 87.06;
  changePercent: number = 0.64;
  majorDimensionName: string = "Orgulho";
  majorDimensionValue: number = 84;

  get isPositive(): boolean {
    return this.changePercent >= 0;
  }
  */
  score: number = 0; // Inicializado como 0, será definido depois
  changePercent: number = 0.64; // Exemplo estático, ajuste conforme necessário
  isPositive: boolean = true; // Inicializado como true, ajuste conforme necessário

  constructor(private NoteStibaService: NoteStibaService) {}

  ngOnInit() {
    this.NoteStibaService.getAverageScore().subscribe(averageScore => {
      this.score = parseFloat(averageScore.toFixed(3));
      this.isPositive = this.changePercent >= 0; // Exemplo, ajuste conforme necessário
    });
  }
}
