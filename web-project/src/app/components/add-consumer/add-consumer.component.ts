import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewConsumerComponent } from '../add-new-consumer/add-new-consumer.component';

@Component({
  selector: 'app-add-consumer',
  templateUrl: './add-consumer.component.html',
  styleUrls: ['./add-consumer.component.css']
})
export class AddConsumerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addNewConsumer(){
    const dialogRef = this.dialog.open(AddNewConsumerComponent, {
    });
  }
}
