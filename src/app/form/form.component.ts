import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  formData: FormGroup;

  constructor(private fb: FormBuilder, private myService: MyService) {
    this.formData = this.fb.group({
      textField: ['', [Validators.required]],
      inputField: ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }

  triggerToGetData() {
    this.myService.getDescription(this.formData.get('inputField').value);
  }

  onURLClick() {
    if (this.formData.get('inputField').valid) {
      this.triggerToGetData();
    } else {
      this.formData.get('textField').markAsUntouched();
      this.formData.get('inputField').markAsTouched();
    }
  }

  // https://random-data-api.com/api/restaurant/random_restaurant
  onInputClick() {
    if (this.formData.get('textField').valid) {
      this.myService.formatData(this.formData.get('textField').value);
    } else {
      this.formData.get('inputField').markAsUntouched();
      this.formData.get('textField').markAsTouched();

    }
  }

  ngOnDestroy() {
    this.formData = null;
    this.myService = null;
    this.fb = null;
  }

}
