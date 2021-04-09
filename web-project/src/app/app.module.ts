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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SafetyDocumentsComponent } from './components/safety-documents/safety-documents.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { AddSafetyDocumentComponent } from './components/add-safety-document/add-safety-document.component';
import { BasicInformationComponent } from './components/safety-documents-components/basic-information/basic-information.component';
import { HistoryOfStateChangesComponent } from './components/safety-documents-components/history-of-state-changes/history-of-state-changes.component';
import { MultimediaAttachmentsComponent } from './components/safety-documents-components/multimedia-attachments/multimedia-attachments.component';
import { EquipmentComponent } from './components/safety-documents-components/equipment/equipment.component';
import { EquipmentService } from './services/equipment.service';
import { ChecklistComponent } from './components/safety-documents-components/checklist/checklist.component';

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
    DataTableComponent,
    SafetyDocumentsComponent,
    AddSafetyDocumentComponent,
    BasicInformationComponent,
    HistoryOfStateChangesComponent,
    MultimediaAttachmentsComponent,
    EquipmentComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    MatButtonToggleModule,
    MatTabsModule,
    RouterModule.forRoot([
        {path: "", component: LoginFormComponent},
        {path : "passwordRecovery", component: PasswordRecoveryComponent},
        {path : "createAccount", component: RegistrationComponent},
        {path : "dashboard", component: DashboardComponent},
        {path : "safetyDocuments", component: SafetyDocumentsComponent},
        {path : "addSafetyDocuments", component: AddSafetyDocumentComponent}
      ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [EquipmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
