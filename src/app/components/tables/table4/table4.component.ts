import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TitleChartComponent } from '../../title-chart/title-chart.component';
import { ButtonDoubtComponent } from '../../button-doubt/button-doubt.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Em nosso setor/Unidade  Organizacional (UO), temos todos os  recursos e informações necessários  para fazer o nosso trabalho', weight: 80.4},
  {position: 2, name: 'O conhecimento técnico necessário e  as experiências são compartilhadas  por nós', weight: 85.4},
  {position: 3, name: 'Tenho acesso a treinamentos  adicionais, se minha função exigir', weight: 81.1},
  {position: 4, name: 'Em nosso setor/UO, medidas  suficientes são tomadas para  otimizar os processos', weight: 81.6},
  {position: 5, name: 'Medidas suficientes são tomadas  para assegurar a qualidade em  nosso setor/UO', weight: 83.8},
  {position: 6, name: 'No nosso setor/UO, estamos  preparados para reagir com  flexibilidade a mudanças ou  problemas', weight: 84.9},
  {position: 7, name: 'Em geral, nos últimos 12 meses,  houve melhorias positivas  duradouras no nosso setor/UO', weight: 80.0},
  {position: 8, name: 'Nós atingimos os objetivos de  trabalho do nosso setor/UO  cumprindo com regulamentos e  processos', weight: 89.6},
  {position: 9, name: 'Métodos de trabalho e processos no  nosso setor/UO são transparentes e  controlados regularmente', weight: 84.8},
  {position: 10, name: 'No nosso setor/UO, riscos e erros  são discutidos, e não ocultados', weight: 85.6},
  {position: 11, name: 'O trabalho em conjunto com colegas  de outros setores é bom', weight: 85.9},
  {position: 12, name: 'Nosso setor/UO, promove uma atmosfera na qual pessoas podem  expressar suas opiniões aberta e sinceramente', weight: 82.7},
  {position: 13, name: 'Meu superior imediato tem um estilo  de liderança exemplar e convincente', weight: 84.7},
  {position: 14, name: 'Eu gosto das minhas atividades  atuais', weight: 91.4},
  {position: 15, name: 'Minha contribuição individual é  reconhecida pelos outros', weight: 84.1},
  {position: 16, name: 'Eu tenho a oportunidade de contribuir  com minhas opiniões/ideias sobre  temas importantes relacionados ao  trabalho', weight: 83.7},
  {position: 17, name: 'Sinto-me em boas condições para  realizar bem meu trabalho', weight: 85.6},
  {position: 18, name: 'Consigo lidar bem com a pressão e  as exigências no trabalho', weight: 90.5},
  {position: 19, name: 'Eu tenho um bom equilíbrio entre  meu trabalho e minha vida pessoal', weight: 90.9},
  {position: 20, name: 'Para mim, a VolksWagen é  uma empregadora atrativa', weight: 92.9},
  {position: 21, name: 'Há oportunidades interessantes de  desenvolvimento para mim na VolksWagen', weight: 83.0},
  {position: 22, name: 'A VolksWagen é vista positivamente pelo público e pelos  nossos clientes', weight: 91.9},
  {position: 23, name: 'Em nossa UO, todos podem agir  com integridade', weight: 90.6},
  {position: 24, name: 'Na VolksWagen, nós usufruímos da cooperação com  outras empresas do Grupo/Marcas', weight: 84.6}
];

@Component({
  selector: 'app-table4',
  standalone: true,
  imports: [MatTableModule, TitleChartComponent, ButtonDoubtComponent],
  templateUrl: './table4.component.html',
  styleUrl: './table4.component.scss'
})
export class Table4Component {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
}
