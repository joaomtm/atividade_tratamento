import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [ TableComponent ],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.scss'
})
export class SectionTwoComponent {

}
