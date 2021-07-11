import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConsumerService } from 'src/app/services/consumer.service';
import { accountTypes } from 'src/assets/accountTypes.enum';
import { DataTableConsumerItem } from '../data-tables/data-table-consumer/data-table-consumer-datasource';

@Component({
  selector: 'app-add-new-consumer',
  templateUrl: './add-new-consumer.component.html',
  styleUrls: ['./add-new-consumer.component.css']
})
export class AddNewConsumerComponent implements OnInit {
  public accountTypes = Object.values(accountTypes);  
  newConsumerForm = this.formBuilder.group({
    consumerId: 0,
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    location: ['',Validators.required],
    priority: "",
    phone: "",
    consumerType: "",
  })
  constructor(private formBuilder : FormBuilder, private consumerService: ConsumerService, 
    @Inject(MAT_DIALOG_DATA) public data: {consumer: DataTableConsumerItem}) {  
     if(data){
       this.newConsumerForm = this.formBuilder.group({
          consumerId: data.consumer.consumerId,
          firstName: data.consumer.firstName,
          lastName: data.consumer.lastName,
          location: data.consumer.location,
          priority: data.consumer.priority,
          phone: data.consumer.phone,
          consumerType: data.consumer.consumerType
       })
     }
   }

  ngOnInit(): void {   
  }
  onSubmit(consumer:any){   
    if(this.data){
      this.consumerService.putConsumer(consumer, consumer.consumerId).subscribe();    
    }
    else{
      this.consumerService.postConsumer(consumer).subscribe();
    }
    console.log(consumer);

    this.newConsumerForm.reset();    
  }
}
