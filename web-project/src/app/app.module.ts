import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { OutageReportComponent } from './components/outage-report/outage-report.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    OutageReportComponent,
    PasswordRecoveryComponent,
    RegistrationComponent,
    PictureUploadComponent,
    DashboardComponent,
    NavbarComponent,
    DashboardCardComponent,
    PieChartComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot([
        {path: "", component: LoginFormComponent},
        {path : "passwordRecovery", component: PasswordRecoveryComponent},
        {path : "createAccount", component: RegistrationComponent},
        {path : "dashboard", component: DashboardComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
