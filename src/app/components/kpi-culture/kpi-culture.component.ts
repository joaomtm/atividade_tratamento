import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kpi-culture',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './kpi-culture.component.html',
  styleUrl: './kpi-culture.component.scss'
})
export class KpiCultureComponent {
  score: number = 68.9;
  changePercent: number = -2;
  majorPracticeName: string = "Cuidar";
  majorPracticeValue: number = 82;

  get isPositive(): boolean {
    return this.changePercent >= 0;
  }
}
