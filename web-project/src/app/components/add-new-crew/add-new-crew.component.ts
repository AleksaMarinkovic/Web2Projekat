import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { CrewService } from 'src/app/services/crew.service';
import { DataTableCrewItem } from '../data-tables/data-table-crew/data-table-crew-datasource';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-new-crew',
  templateUrl: './add-new-crew.component.html',
  styleUrls: ['./add-new-crew.component.css']
})
export class AddNewCrewComponent implements OnInit {
  newCrewForm = this.formBuilder.group({
    crewName: ['',Validators.required],
    members: ['',Validators.required],
  })
  constructor(private formBuilder : FormBuilder, private crewService: CrewService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(crew: DataTableCrewItem){
    this.crewService.postCrew(crew).subscribe();
    console.log(crew);    
    this.newCrewForm.reset();   
    this._router.navigate(['/addCrew']);
  }

}
