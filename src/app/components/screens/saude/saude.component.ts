import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { TitlePageComponent } from '../../title-page/title-page.component';
import { TitleSectionComponent } from '../../title-section/title-section.component';
import { SectionTwoComponent } from '../../section-two/section-two.component';
import { TableComponent } from '../../table/table.component';
import { SectionOneComponent } from '../../section-one/section-one.component';
import { SectionThreeComponent } from '../../section-three/section-three.component';
import { SectionThreeStibaComponent } from '../../section-three-stiba/section-three-stiba.component';
import { SectionFiveComponent } from '../../section-five/section-five.component';
import { MultiLineChartComponent } from '../../charts/multi-line-chart/multi-line-chart.component';
import { KpiNoteComponent } from '../../kpi-note/kpi-note.component';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { KpiResponseComponent } from '../../kpi-response/kpi-response.component';
import { Table1Component } from '../../tables/table1/table1.component';
import { Table2Component } from '../../tables/table2/table2.component';
import { Table3Component } from '../../tables/table3/table3.component';
import { Table4Component } from '../../tables/table4/table4.component';
import { Score1Component } from '../../scores/score1/score1.component';
import { Score2Component } from '../../scores/score2/score2.component';
import { Score3Component } from '../../scores/score3/score3.component';
import { Score4Component } from '../../scores/score4/score4.component';
import { Score5Component } from '../../scores/score5/score5.component';
import { SectionThreeSaudeComponent } from "../../section-three-saude/section-three-saude.component";
import { ColumnChartComponent } from "../../charts/column-chart/column-chart.component";
import { LineChartComponent } from "../../charts/line-chart/line-chart.component";
import { ColumnFactoryChartComponent } from "../../charts/column-factory-chart/column-factory-chart.component";
import { SaudeService } from '../../../services/saude.service';

@Component({
    selector: 'app-saude',
    standalone: true,
    templateUrl: './saude.component.html',
    styleUrl: './saude.component.scss',
    imports: [HeaderComponent, TitlePageComponent, TitleSectionComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionThreeStibaComponent, SectionFiveComponent, TableComponent, MultiLineChartComponent, KpiNoteComponent, BarChartComponent, KpiResponseComponent, Table1Component, Table2Component, Table3Component, Table4Component, Score1Component, Score2Component, Score3Component, Score4Component, Score5Component, SectionThreeSaudeComponent, ColumnChartComponent, LineChartComponent, ColumnFactoryChartComponent]
})
export class SaudeComponent implements OnInit {

    diseaseTop: any[] = [];
    
    constructor(private saudeService: SaudeService) {}
    
    ngOnInit(): void {
        
        this.saudeService.getTopDiseases().subscribe(data => {
            this.diseaseTop = data.map((item, index) => ({
              position: index + 1, // Se você quiser manter uma coluna de posição
              name: item.disease || 'Não Informado',
              weight: item.quantity
            }));
        });
    }
}