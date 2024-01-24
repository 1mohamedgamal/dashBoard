import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dashBoard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TableComponent } from './components/table/table.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { GraphComponent } from './components/graph/graph.component';
import { CardsComponent } from './components/cards/cards.component';
import { ThemeswitchComponent } from './components/themeswitch/themeswitch.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: DashBoardComponent },

  { path: 'table', component: TableComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'cards', component: CardsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],

  declarations: [
    DashBoardComponent,
    ChartsComponent,

    TableComponent,
    TicketComponent,
    NavbarComponent,
    GraphComponent,
    CardsComponent,
    ThemeswitchComponent,
  ],
})
export class DashBoardModule {}
