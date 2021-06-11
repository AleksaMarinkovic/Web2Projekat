import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {

  recoveryForm = this.formBuilder.group({
    email :"",
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    window.alert("Recovery!");
  }
}
