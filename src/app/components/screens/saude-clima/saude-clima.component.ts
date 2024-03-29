import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { TitleSectionComponent } from '../../title-section/title-section.component';
import { TitlePageComponent } from '../../title-page/title-page.component';
import { SectionFiveComponent } from '../../section-five/section-five.component';
import { SectionTwoComponent } from '../../section-two/section-two.component';
import { SectionOneComponent } from '../../section-one/section-one.component';
import { MultiLineChartComponent } from '../../charts/multi-line-chart/multi-line-chart.component';
import { TableComponent } from '../../table/table.component';
import { ScatterChartComponent } from '../../charts/scatter-chart/scatter-chart.component';
import { KpiCultureComponent } from '../../kpi-culture/kpi-culture.component';
import { KpiNoteComponent } from '../../kpi-note/kpi-note.component';
import { FiltersAspectComponent } from "../../filters/filters-aspect/filters-aspect.component";
import { CidfComponent } from "../../filters/cidf/cidf.component";

@Component({
    selector: 'app-saude-clima',
    standalone: true,
    templateUrl: './saude-clima.component.html',
    styleUrl: './saude-clima.component.scss',
    imports: [HeaderComponent, TitlePageComponent, TitleSectionComponent, SectionFiveComponent, SectionTwoComponent, SectionOneComponent, MultiLineChartComponent, TableComponent, ScatterChartComponent, KpiCultureComponent, KpiNoteComponent, FiltersAspectComponent, CidfComponent]
})
export class SaudeClimaComponent {

}
