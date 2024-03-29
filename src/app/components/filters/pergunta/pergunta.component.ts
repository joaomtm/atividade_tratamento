import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Não se esqueça de importar o CommonModule

@Component({
  selector: 'app-pergunta',
  standalone: true,
  imports: [CommonModule], // Inclua o CommonModule nas importações para o uso de *ngIf
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.scss']
})
export class PerguntaComponent {
  showFilterOptions = false;

  // Método para alternar a visibilidade das opções de filtro de perguntas
  toggleFilterOptions() {
    this.showFilterOptions = !this.showFilterOptions;
  }

  // Método chamado quando uma opção de filtro de pergunta é selecionada
  filterBy(option: string) {
    console.log('Filtrar por:', option);
    // Implemente a lógica de filtragem aqui

    // Fechar as opções de filtro após a seleção
    this.showFilterOptions = false;
  }
}