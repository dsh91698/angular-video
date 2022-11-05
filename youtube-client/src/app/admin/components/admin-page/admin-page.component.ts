import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminPageValidators } from './admin-validators';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {

  public adminForm: FormGroup;

  public inputDate: Date = new Date();


  constructor() {
    this.adminForm = new FormGroup({
    });

  }

  ngOnInit(): void {

    this.adminForm = new FormGroup({
      title: new FormControl('', [
        Validators.required, //Please enter a title
        Validators.minLength(3), //The title is too short
        Validators.maxLength(20), //The title is too long
      ]),

      description: new FormControl(null, [
        Validators.maxLength(255), //The description is too long
      ]),

      imgCover: new FormControl(null, [
        Validators.required, //Please enter a link to the image
        AdminPageValidators.isUrlCorrect, //The image link is invalid
      ]),

      videoLink: new FormControl(null, [
        Validators.required, //Please enter a link to the video
        AdminPageValidators.isUrlCorrect, //The video link is invalid
      ]),

      creationDate: new FormControl(null, [
        Validators.required, //Please enter a creation date
        AdminPageValidators.isDateCorrect, //The date is invalid
      ]),
    });

  }

  submitForm() {
    console.log('submit adminForm...', this.adminForm.value);
  }


}
