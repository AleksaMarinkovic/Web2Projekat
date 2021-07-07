import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrewService } from 'src/app/services/crew.service';

@Component({
  selector: 'app-modify-crew',
  templateUrl: './modify-crew.component.html',
  styleUrls: ['./modify-crew.component.css']
})
export class ModifyCrewComponent implements OnInit {
  newCrewForm = this.formBuilder.group({
    crewName: "",
    members: "",
  })
  constructor(private formBuilder: FormBuilder, private crewService: CrewService, @Inject(MAT_DIALOG_DATA) public data: {crew: any}, private dialogRef: MatDialogRef<ModifyCrewComponent>) { }

  ngOnInit(): void {
    this.newCrewForm = this.formBuilder.group({
      crewName: this.data.crew.crewName,
      members: this.data.crew.members,
    })

  }

  onSubmit(crew:any){
    if(this.data){
      crew.crewId = this.data.crew.crewId;

      this.crewService.putCrew(crew, crew.crewId).subscribe();    
    }
    else{
      this.crewService.postCrew(crew).subscribe();
    }
    this.dialogRef.close(); // <- this closes the dialog. 
    this.newCrewForm.reset();    
  }
}
