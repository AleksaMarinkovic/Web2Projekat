import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multimedia-attachments-work-plan',
  templateUrl: './multimedia-attachments-work-plan.component.html',
  styleUrls: ['./multimedia-attachments-work-plan.component.css']
})
export class MultimediaAttachmentsWorkPlanComponent implements OnInit {
  @Input() addWorkPlanForm!: FormGroup;
  imageURL: string = "../../../assets/images/PROFILE.png"; 
  constructor() { }

  ngOnInit(): void {
  }
  showPreview(event: any) {
    const file = (event.target as HTMLInputElement).files[0];

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
    
  }
}
