import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataTableModule} from 'angular5-data-table';
import {CampaignComponent} from './campaign/campaign.component';
import {RouterModule, Routes} from '@angular/router';
import {ApiService} from "./shared/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiInterceptor} from "./shared/api.interceptor";
import {FormsModule} from "@angular/forms";
import { PlatformComponent } from './platform/platform.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'campaigns/:id', component: CampaignComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CampaignComponent,
    PlatformComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    DataTableModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
