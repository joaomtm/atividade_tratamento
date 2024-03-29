import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-button-doubt',
  standalone: true,
  imports: [ MatButton, MatTooltip, CommonModule ],
  templateUrl: './button-doubt.component.html',
  styleUrl: './button-doubt.component.scss'
})
export class ButtonDoubtComponent {
  mostrarTooltip: boolean = false;
}
