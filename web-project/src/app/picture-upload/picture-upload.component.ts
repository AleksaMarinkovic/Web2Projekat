import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.css']
})
export class PictureUploadComponent implements OnInit {  
  imageURL: string = "../../../assets/images/profileDefault.png"; 

  constructor() {
    
  }
  ngOnInit(): void { }


  // Image Preview
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
