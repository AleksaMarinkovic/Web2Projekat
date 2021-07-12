import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CrewService } from 'src/app/services/crew.service';
import { IncidentService } from 'src/app/services/incident.service';
import { UserService } from 'src/app/services/user.service';
import { workPlanDocumentTypes } from 'src/assets/workPlantDocumentTypes.enum';
import { DataTableIncidentsItem } from '../../data-tables/data-table-incidents/data-table-incidents-datasource';

@Component({
  selector: 'app-basic-information-work-plan',
  templateUrl: './basic-information-work-plan.component.html',
  styleUrls: ['./basic-information-work-plan.component.css']
})
export class BasicInformationWorkPlanComponent implements OnInit {
  @Input() addWorkPlanForm: FormGroup;
  public workPlanTypes = Object.values(workPlanDocumentTypes);
  user: any;
  crews: any[];
  currDate: any;
  incidents: DataTableIncidentsItem[];

  constructor(private userService: UserService, private crewService: CrewService, private incidentService: IncidentService) {
   }

  ngOnInit(): void {    
    this.userService.getUser(localStorage.getItem('id')).subscribe(
      data => this.user = data
    )
    this.crewService.getAllCrews().subscribe(data => this.crews = data);
    this.currDate = Date.now().toString();
    this.incidentService.getAllIncidents().subscribe(
      data => this.incidents = data      
    );
  }

}
