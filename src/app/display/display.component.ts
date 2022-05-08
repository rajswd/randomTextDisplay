import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyService } from '../services/my.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnDestroy {

  ngUnsubscribe: any = new Subject();
  description: string;
  dataList: any[] = [];
  constructor(private myService: MyService) {}

  ngOnInit() {
    this.myService.data$.asObservable().subscribe((data: any) => {
      if (data && data.dataList) {
        this.dataList = data.dataList || [];
        this.description = data.description;
      }
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
