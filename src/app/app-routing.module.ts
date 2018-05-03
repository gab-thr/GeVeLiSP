import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PredictionPageComponent } from './pages/prediction-page/prediction-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { NetworkPageComponent } from './pages/network/network-page/network-page.component';
import { AlertsPageComponent } from './pages/alerts-page/alerts-page.component';
import {MainPageComponent} from './pages/missionPages/main-page/main-page.component';
import {MissionRequestPageComponent} from './pages/missionPages/mission-request-page/mission-request-page.component';
import {CreateMissionManuallyPageComponent} from './pages/missionPages/create-mission-manually-page/create-mission-manually-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NetworkParametersPageComponent} from './pages/network/network-parameters-page/network-parameters-page.component';
import { SuperUserHomePageComponent } from './pages/super-user-home-page/super-user-home-page.component';
import {CreateAccountPageComponent} from './pages/create-account-page/create-account-page.component';
import {VeloSpotterHomePageComponent} from './pages/velo-spotter-home-page/velo-spotter-home-page.component';
import {CurrentMissionPageComponent} from './pages/current-mission-page/current-mission-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'predictions', component: PredictionPageComponent},
  {path: 'missions', component: MainPageComponent},
  {path: 'teams', component: TeamPageComponent},
  {path: 'network', component: NetworkPageComponent},
  {path: 'alerts', component: AlertsPageComponent},
  {path: 'missions/queries', component: MissionRequestPageComponent},
  {path: 'missions/create', component: CreateMissionManuallyPageComponent},
  {path: 'network/parameters', component: NetworkParametersPageComponent},
  // superUserPages
  {path: 'superUserHome', component: SuperUserHomePageComponent},
  {path: 'createAccounts', component: CreateAccountPageComponent},
  // velospotterPages
  {path: 'velospotterHome', component: VeloSpotterHomePageComponent},
  {path: 'currentMission', component: CurrentMissionPageComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
