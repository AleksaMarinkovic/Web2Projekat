import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddressService } from 'src/app/services/address.service';
import { ConsumerService } from 'src/app/services/consumer.service';
import { accountTypes } from 'src/assets/accountTypes.enum';
import { DataTableConsumerItem } from '../data-tables/data-table-consumer/data-table-consumer-datasource';
import { AddressPriority } from '../settings/settings.component';

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
    location: "",
    priority: "",
    phone: "",
    consumerType: "",
  })
  addresses: AddressPriority[] = [];
  priority: string = "";
  constructor(private formBuilder : FormBuilder, private consumerService: ConsumerService, 
    @Inject(MAT_DIALOG_DATA) public data: {consumer: DataTableConsumerItem}, private addressService: AddressService) {  
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
     this.addressService.getAllAddresses().subscribe(data => {this.addresses = data; console.log(this.addresses)});
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
  onChange(){ 
    let address = (<HTMLInputElement>document.getElementById("address")).value;
    console.log(address);
    this.addresses.forEach(element => {
      if(element.address == address){
        this.newConsumerForm.value.priority = element.priority;
        this.priority = element.priority;
        console.log(element);
      }
    })
  }
}
