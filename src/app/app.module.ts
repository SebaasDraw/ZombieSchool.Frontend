import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { CerebrosComponent } from './pages/cerebros/cerebros.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ZombiesComponent } from './pages/zombies/zombies.component';
import { HeaderComponent } from './shared/header/header.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { ZombieAddModalComponent } from './modals/zombie-add-modal/zombie-add-modal.component';
import { ZombieEditModalComponent } from './modals/zombie-edit-modal/zombie-edit-modal.component';
import { CerebroAddModalComponent } from './modals/cerebro-add-modal/cerebro-add-modal.component';
import { CerebroEditModalComponent } from './modals/cerebro-edit-modal/cerebro-edit-modal.component';
import { TitleComponent } from './shared/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { appRouting } from './app.routes';
import { SettingsService } from './services/settings.service';
import { RegisterComponent } from './pages/register/register.component';
import { BarChartComponent } from './pages/graphs/bar-chart/bar-chart.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { BarChartUserComponent } from './pages/graphs/bar-chart-user/bar-chart-user.component';
import { CerebroRequestComponent } from './modals/cerebro-request/cerebro-request.component';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent,
    CerebrosComponent,
    DashboardComponent,
    ZombiesComponent,
    HeaderComponent,
    SettingsComponent,
    SidemenuComponent,
    ZombieAddModalComponent,
    ZombieEditModalComponent,
    CerebroAddModalComponent,
    CerebroEditModalComponent,
    TitleComponent,
    BarChartComponent,
    RequestsComponent,
    BarChartUserComponent,
    CerebroRequestComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRouting,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
