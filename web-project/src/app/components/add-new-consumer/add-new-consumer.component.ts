import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { accountTypes } from 'src/assets/accountTypes.enum';

@Component({
  selector: 'app-add-new-consumer',
  templateUrl: './add-new-consumer.component.html',
  styleUrls: ['./add-new-consumer.component.css']
})
export class AddNewConsumerComponent implements OnInit {
  public accountTypes = Object.values(accountTypes);  
  newConsumerForm = this.formBuilder.group({
    id: "",
    name: "",
    lastname: "",
    location: "",
    priority: "",
    phoneNumber: "",
    consumerType: accountTypes,
  })
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(consumer:any){
    window.alert("temp. Should add consumer with id: "+ consumer.id);
  }
}
