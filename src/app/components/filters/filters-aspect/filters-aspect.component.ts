import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters-aspect',
  standalone: true,
  imports: [CommonModule], // Inclua CommonModule nas importações
  templateUrl: './filters-aspect.component.html',
  styleUrls: ['./filters-aspect.component.scss']
})
export class FiltersAspectComponent {
  showFilterOptions = false;

  // Método para alternar a visibilidade das opções de filtro
  toggleFilterOptions() {
    this.showFilterOptions = !this.showFilterOptions;
  }

  // Método chamado quando um filtro é selecionado
  filterBy(option: string) {
    console.log('Filtrar por:', option);
    // Implemente a lógica de filtragem aqui

    // Fechar as opções de filtro após a seleção
    this.showFilterOptions = false;
  }
}