import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cidf',
  standalone: true,
  imports: [CommonModule], // Inclua o CommonModule nas importações
  templateUrl: './cidf.component.html',
  styleUrls: ['./cidf.component.scss']
})
export class CidfComponent {
  showFilterOptions = false;

  // Método para alternar a visibilidade das opções de filtro do CIDF
  toggleFilterOptions() {
    this.showFilterOptions = !this.showFilterOptions;
  }

  // Método chamado quando uma opção de filtro do CIDF é selecionada
  filterBy(option: string) {
    console.log('Filtrar por:', option);
    // Implemente a lógica de filtragem aqui

    // Fechar as opções de filtro após a seleção
    this.showFilterOptions = false;
  }
}