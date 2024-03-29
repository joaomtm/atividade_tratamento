import { Component } from '@angular/core';
import { TitlePageComponent } from '../../title-page/title-page.component';
import { TitleSectionComponent } from '../../title-section/title-section.component';
import { HeaderComponent } from '../../header/header.component';
import { TableComponent } from '../../table/table.component';
import { SectionTwoComponent } from '../../section-two/section-two.component';
import { SectionOneComponent } from '../../section-one/section-one.component';
import { SectionThreeComponent } from '../../section-three/section-three.component';
import { SectionFourComponent } from '../../section-four/section-four.component';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { ColumnChartComponent } from '../../charts/column-chart/column-chart.component';
import { LineChartComponent } from '../../charts/line-chart/line-chart.component';
import { KpiCultureComponent } from '../../kpi-culture/kpi-culture.component';
import { KpiNoteComponent } from '../../kpi-note/kpi-note.component';
import { EnpsScoreComponent } from '../../enps-score/enps-score.component';
import { KpiResponseComponent } from '../../kpi-response/kpi-response.component';
import { CidfComponent } from "../../filters/cidf/cidf.component";
import { FiltersAspectComponent } from "../../filters/filters-aspect/filters-aspect.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [TitlePageComponent, TitleSectionComponent, HeaderComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, TableComponent, ColumnChartComponent, LineChartComponent, KpiCultureComponent, KpiNoteComponent, EnpsScoreComponent, KpiResponseComponent, CidfComponent, FiltersAspectComponent]
})
export class HomeComponent {

}
