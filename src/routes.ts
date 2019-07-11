import {Routes} from '@angular/router';
import { SectionSalesComponent } from './app/sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './app/sections/section-orders/section-orders.component';
import { SectionHealthsComponent } from './app/sections/section-healths/section-healths.component';
import { SectionProductionsComponent } from './app/sections/section-productions/section-productions.component';
import { SectionItemsComponent } from './app/sections/section-items/section-items.component';
import { SectionEasyGoComponent} from './app/sections/section-easy-go/section-easy-go.component';
import { SectionRegisterComponent } from './app/sections/section-register/section-register.component';
import { SectionLoginComponent } from './app/sections/section-login/section-login.component';
import { SectionDashboardComponent } from './app/sections/section-dashboard/section-dashboard.component';


export const appRoutes: Routes = [
    {path: 'sales', component: SectionSalesComponent },
    {path: 'orders', component: SectionOrdersComponent },
    {path: 'health', component: SectionHealthsComponent },
    {path: 'production', component: SectionProductionsComponent},
    {path: 'items', component: SectionItemsComponent},
    {path:'easygo', component: SectionEasyGoComponent},
    {path:'register', component:SectionRegisterComponent},
    {path:'login', component:SectionLoginComponent},
    {path: 'dashboard', component:SectionDashboardComponent},

    {path: '', redirectTo: '/sales', pathMatch: 'full' }
];