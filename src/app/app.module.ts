import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


// components
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { CreateUserFormComponent } from './components/forms/create-user-form/create-user-form.component';
import { TableComponent } from './components/table/table.component';
import { MapComponent } from './components/map/map.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateTeamFormComponent } from './components/forms/create-team-form/create-team-form.component';
import { CreateManagerFormComponent } from './components/forms/create-manager-form/create-manager-form.component';
import { NewMissionRequestComponent } from './components/forms/new-mission-request/new-mission-request.component';
import { StationParametersComponent } from './components/forms/station-parameters/station-parameters.component';
import { BikeTerminalParametersComponent } from './components/forms/station-parameters/bike-terminal-parameters/bike-terminal-parameters.component';
import { CreateMissionFormComponent } from './components/forms/create-mission-form/create-mission-form.component';
import { CreateMissionManuallyFormComponent } from './components/forms/create-mission-manually-form/create-mission-manually-form.component';
import { CreateMissionManuallyTableComponent } from './components/table/create-mission-manually-table/create-mission-manually-table.component';
import { FormsModule } from '@angular/forms';
import { PredictionPageComponent } from './pages/prediction-page/prediction-page.component';
import { NetworkPageComponent } from './pages/network/network-page/network-page.component';
import { ComboDropdownComponent } from './components/combo-dropdown/combo-dropdown.component';
import { MissionTaskComponent } from './components/mission-task/mission-task.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MissionStartComponent } from './components/mission-start/mission-start.component';
import { MultiSelectModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/chart';
import { MapChartComponent } from './components/map-chart/map-chart.component';


import { AppRoutingModule } from './/app-routing.module';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { AlertsPageComponent } from './pages/alerts-page/alerts-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/missionPages/main-page/main-page.component';
import { MissionRequestPageComponent } from './pages/missionPages/mission-request-page/mission-request-page.component';
import { CreateMissionManuallyPageComponent } from './pages/missionPages/create-mission-manually-page/create-mission-manually-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NetworkParametersPageComponent } from './pages/network/network-parameters-page/network-parameters-page.component';
import { SuperUserHomePageComponent } from './pages/super-user-home-page/super-user-home-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { VeloSpotterHomePageComponent } from './pages/velo-spotter-home-page/velo-spotter-home-page.component';
import { CurrentMissionPageComponent } from './pages/current-mission-page/current-mission-page.component';
import {ResponsiveModule} from 'ng2-responsive';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CreateUserFormComponent,
    TableComponent,
    MapComponent,
    NavbarComponent,
    CreateTeamFormComponent,
    CreateManagerFormComponent,
    NewMissionRequestComponent,
    StationParametersComponent,
    BikeTerminalParametersComponent,
    CreateMissionFormComponent,
    CreateMissionManuallyFormComponent,
    CreateMissionManuallyTableComponent,
    PredictionPageComponent,
    NetworkPageComponent,
    TeamPageComponent,
    AlertsPageComponent,
    LoginPageComponent,
    MainPageComponent,
    MissionRequestPageComponent,
    CreateMissionManuallyPageComponent,
    HomePageComponent,
    NetworkParametersPageComponent,
    SuperUserHomePageComponent,
    CreateAccountPageComponent,
    VeloSpotterHomePageComponent,
    CurrentMissionPageComponent,
    ComboDropdownComponent,
    MissionTaskComponent,
    MiniMapComponent,
    MissionStartComponent,
    MapChartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDI7IFVWlqhTCxHYAqtyneeYGgL8bSdpQI'
    }),
    AgmSnazzyInfoWindowModule,
    NgbModule,
    AppRoutingModule,
    MultiSelectModule,
    ChartModule,
    ResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
