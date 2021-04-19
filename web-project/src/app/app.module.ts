import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PrijavaKvaraComponent } from './components/prijava-kvara/prijava-kvara.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { AddConsumerComponent } from './components/add-consumer/add-consumer.component';
import { AddNewConsumerComponent } from './components/add-new-consumer/add-new-consumer.component';
import { DataTableConsumerComponent } from './components/data-table-consumer/data-table-consumer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkPlansComponent } from './components/work-plans/work-plans.component';
import { DataTableWorkPlanComponent } from './components/data-table-work-plan/data-table-work-plan.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AddWorkPlanComponent } from './components/add-work-plan/add-work-plan.component';
import { BasicInformationWorkPlanComponent } from './components/work-plan-components/basic-information-work-plan/basic-information-work-plan.component';
import { MultimediaAttachmentsWorkPlanComponent } from './components/work-plan-components/multimedia-attachments-work-plan/multimedia-attachments-work-plan.component';
import { HistoryOfStateChangesWorkPlanComponent } from './components/work-plan-components/history-of-state-changes-work-plan/history-of-state-changes-work-plan.component';
import { SwitchingInstructionsWorkPlanComponent } from './components/work-plan-components/switching-instructions-work-plan/switching-instructions-work-plan.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EquipmentWorkPlanComponent } from './components/work-plan-components/equipment-work-plan/equipment-work-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PictureUploadComponent,
    SignOutComponent,
    NotificationsComponent,
    PrijavaKvaraComponent,
    SettingsComponent,
    AddConsumerComponent,
    AddNewConsumerComponent,
    DataTableConsumerComponent,
    WorkPlansComponent,
    DataTableWorkPlanComponent,
    BasicInformationWorkPlanComponent,
    MultimediaAttachmentsWorkPlanComponent,
    HistoryOfStateChangesWorkPlanComponent,
    SwitchingInstructionsWorkPlanComponent,
    EquipmentWorkPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,    
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot([
      //{path: "", component: UserProfileComponent},
      //{path: "", component: SignOutComponent},
      //{path: "", component: NotificationsComponent}
      //{path: "", component: SettingsComponent},
      //{path: "", component: AddConsumerComponent},
      //{path: "", component: AddNewConsumerComponent},
      //{path: "", component: WorkPlansComponent},
      {path: "", component: AddWorkPlanComponent}

    ]),
    MatRadioModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
