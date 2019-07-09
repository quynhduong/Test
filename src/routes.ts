import {Routes} from '@angular/router';
import { SectionSalesComponent } from './app/sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './app/sections/section-orders/section-orders.component';
import { SectionHealthsComponent } from './app/sections/section-healths/section-healths.component';
import { SectionProductionsComponent } from './app/sections/section-productions/section-productions.component';

export const appRoutes: Routes = [
    {path: 'sales', component: SectionSalesComponent },
    {path: 'orders', component: SectionOrdersComponent },
    {path: 'health', component: SectionHealthsComponent },
    {path: 'production', component: SectionProductionsComponent},
    
    {path: '', redirectTo: '/sales', pathMatch: 'full' }
];