import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ZombiesComponent } from './pages/zombies/zombies.component';
import { CerebrosComponent } from './pages/cerebros/cerebros.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegisterComponent } from './pages/register/register.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'requests', component: RequestsComponent },
    { path: 'zombies', component: ZombiesComponent },
    { path: 'cerebros', component: CerebrosComponent },
    { path: '**', pathMatch: 'full', component: NopagefoundComponent },

];

export const appRouting = RouterModule.forRoot(routes);
