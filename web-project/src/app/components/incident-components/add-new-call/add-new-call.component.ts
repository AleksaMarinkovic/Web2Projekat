import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { reasonTypes } from 'src/assets/reasonTypes.enum';
import { ConsumerDialogueComponent } from '../../consumer-dialogue/consumer-dialogue.component';
import { DataTableConsumerItem } from '../../data-tables/data-table-consumer/data-table-consumer-datasource';

@Component({
  selector: 'app-add-new-call',
  templateUrl: './add-new-call.component.html',
  styleUrls: ['./add-new-call.component.css']
})
export class AddNewCallComponent implements OnInit {
  public reasonTypes = Object.values(reasonTypes);
  newCallForm = this.formBuilder.group({
    reason: "",
    hazardName: "",
    hazardPriority: "",
    comment: "",
    consumerId: "" //Sends the id to act as a foreign key of the consumer
  });
  consumer: DataTableConsumerItem;

  constructor(private formBuilder : FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(call:any){
    window.alert("temp. Should add crew with id: "+ call.id);
  }
  openModalDialogue(){
    const dialogRef = this.dialog.open(ConsumerDialogueComponent);
    dialogRef.afterClosed().subscribe(result => this.consumer = result);     
    
  }
}
