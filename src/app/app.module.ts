import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {appRoutes} from '../routes';


import { ChartsModule} from 'ng2-charts';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionHealthsComponent } from './sections/section-healths/section-healths.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ServerComponent } from './server/server.component';
import { SectionProductionsComponent } from './sections/section-productions/section-productions.component';
import { SectionItemsComponent } from './sections/section-items/section-items.component';
import { SectionEasyGoComponent } from './sections/section-easy-go/section-easy-go.component';
import { ProductionLineChartComponent } from './charts/production-line-chart/production-line-chart.component';
import { OperationTimeBarChartComponent } from './charts/operation-time-bar-chart/operation-time-bar-chart.component';
import { InventoryLineChartComponent } from './charts/inventory-line-chart/inventory-line-chart.component';
import { SectionLoginComponent } from './sections/section-login/section-login.component';
import { SectionRegisterComponent } from './sections/section-register/section-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthsComponent,
    SectionProductionsComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerComponent,
    SectionItemsComponent,
    SectionEasyGoComponent,
    ProductionLineChartComponent,
    OperationTimeBarChartComponent,
    InventoryLineChartComponent,
    SectionLoginComponent,
    SectionRegisterComponent
    
  ],
  imports: [
    BrowserModule,
  //  AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
