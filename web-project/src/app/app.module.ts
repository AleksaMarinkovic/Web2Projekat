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
import { DataTableComponent } from './components/data-tables/data-table-safety-docs/data-table.component';
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
import { WorkRequestsComponent } from './components/work-requests/work-requests.component';
import { DataTableWorkRequestsComponent } from './components/data-tables/data-table-work-requests/data-table-work-requests.component';
import { AddWorkRequestsComponent } from './components/add-work-requests/add-work-requests.component';
import { BasicInformationWrComponent } from './components/work-request-components/basic-information-wr/basic-information-wr.component';
import { HistoryOfStateChangesWrComponent } from './components/work-request-components/history-of-state-changes-wr/history-of-state-changes-wr.component';
import { MultimediaAttachmentsWrComponent } from './components/work-request-components/multimedia-attachments-wr/multimedia-attachments-wr.component';
import { EquipmentWrComponent } from './components/work-request-components/equipment-wr/equipment-wr.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { DataTableIncidentsComponent } from './components/data-tables/data-table-incidents/data-table-incidents.component';
import { AddIncidentComponent } from './components/add-incident/add-incident.component';
import { BasicInformationIncidentsComponent } from './components/incident-components/basic-information-incidents/basic-information-incidents.component';
import { ResolutionIncidentsComponent } from './components/incident-components/resolution-incidents/resolution-incidents.component';
import { MultimediaAttachmentsIncidentsComponent } from './components/incident-components/multimedia-attachments-incidents/multimedia-attachments-incidents.component';
import { EquipmentIncidentsComponent } from './components/incident-components/equipment-incidents/equipment-incidents.component';
import { AddElementComponent } from './components/add-element/add-element.component';
import { DataTableElementComponent } from './components/data-tables/data-table-element/data-table-element.component';
import { MatButtonModule } from '@angular/material/button';
import { AddNewElementComponent } from './components/add-new-element/add-new-element.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/map/map.component';
import { SplitPipe } from './pipes/pipes/split.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCrewComponent } from './components/add-crew/add-crew.component';
import { DataTableCrewComponent } from './components/data-tables/data-table-crew/data-table-crew.component';
import { AddNewCrewComponent } from './components/add-new-crew/add-new-crew.component';

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
    ChecklistComponent,
    WorkRequestsComponent,
    DataTableWorkRequestsComponent,
    AddWorkRequestsComponent,
    BasicInformationWrComponent,
    HistoryOfStateChangesWrComponent,
    MultimediaAttachmentsWrComponent,
    EquipmentWrComponent,
    IncidentsComponent,
    DataTableIncidentsComponent,
    AddIncidentComponent,
    BasicInformationIncidentsComponent,
    ResolutionIncidentsComponent,
    MultimediaAttachmentsIncidentsComponent,
    EquipmentIncidentsComponent,
    AddElementComponent,
    DataTableElementComponent,
    AddNewElementComponent,
    MapComponent,
    SplitPipe,
    AddCrewComponent,
    DataTableCrewComponent,
    AddNewCrewComponent,
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
    NgbModule,
    RouterModule.forRoot([
      { path: "", component: LoginFormComponent },
      { path: "passwordRecovery", component: PasswordRecoveryComponent },
      { path: "createAccount", component: RegistrationComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "safetyDocuments", component: SafetyDocumentsComponent },
      { path: "addSafetyDocuments", component: AddSafetyDocumentComponent },
      { path: "workRequests", component: WorkRequestsComponent },
      { path: "addWorkRequest", component: AddWorkRequestsComponent },
      { path: "incidents", component: IncidentsComponent },
      { path: "addIncident", component: AddIncidentComponent },
      { path: "addElement", component: AddElementComponent },
      { path: "addNewElement", component: AddNewElementComponent },
      { path: "map", component: MapComponent },
      { path: "addCrew", component: AddCrewComponent },
      { path: "addNewCrew", component: AddNewCrewComponent }
    ]),    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAN3C1PGzRuOlC5cismR2Bb1V91MFY-b_Y'
    }),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ],
  providers: [EquipmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
