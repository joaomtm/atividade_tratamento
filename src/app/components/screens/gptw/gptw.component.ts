import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { TitlePageComponent } from '../../title-page/title-page.component';
import { TitleSectionComponent } from '../../title-section/title-section.component';
import { SectionTwoComponent } from '../../section-two/section-two.component';
import { TableComponent } from '../../table/table.component';
import { SectionOneComponent } from '../../section-one/section-one.component';
import { SectionThreeComponent } from '../../section-three/section-three.component';
import { SectionFourComponent } from '../../section-four/section-four.component';
import { HeatmapChartComponent } from '../../charts/heatmap-chart/heatmap-chart.component';
import { ScatterChartComponent } from '../../charts/scatter-chart/scatter-chart.component';
import { KpiCultureComponent } from '../../kpi-culture/kpi-culture.component';
import { KpiNoteComponent } from '../../kpi-note/kpi-note.component';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { EnpsScoreComponent } from '../../enps-score/enps-score.component';
import { KpiResponseComponent } from '../../kpi-response/kpi-response.component';
import { FiltersAspectComponent } from "../../filters/filters-aspect/filters-aspect.component";
import { CidfComponent } from "../../filters/cidf/cidf.component";

@Component({
    selector: 'app-gptw',
    standalone: true,
    templateUrl: './gptw.component.html',
    styleUrl: './gptw.component.scss',
    imports: [HeaderComponent, TitlePageComponent, TitleSectionComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, TableComponent, HeatmapChartComponent, ScatterChartComponent, KpiResponseComponent, KpiCultureComponent, KpiNoteComponent, BarChartComponent, EnpsScoreComponent, FiltersAspectComponent, CidfComponent]
})
export class GptwComponent {

}
