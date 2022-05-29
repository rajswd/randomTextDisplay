import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-curd-operation',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit, OnDestroy {

  formData: FormGroup;
  dataList: any[] = [];
  constructor(private fb: FormBuilder, private myService: MyService) {
      this.formData = this.fb.group({
        f_name: ['', [Validators.required]],
        l_name: ['', [Validators.required]],
        location: ['', [Validators.required]],
        active: ''
      });
   }

  ngOnInit() {
   this.getDataList();
  }

  getDataList() {
    this.myService.getDataList().subscribe(item => {
      this.dataList = item;
    }, err => {
      console.error('-Error in retriving data- ', err);
    });
  }

  onSave() {
    this.formData.markAsDirty();
    if ( this.formData.valid) {
      this.myService.saveUser(this.formData.getRawValue()).subscribe(item => {
        this.dataList.push(item);
        this.formData.reset();
      }, err => {
        console.error('-Error in Saving data - ', err);
      });
    }
  }

onReset() {
  this.formData.reset();
}

  ngOnDestroy() {
    this.formData = null;
    this.myService = null;
    this.fb = null;
  }

}
