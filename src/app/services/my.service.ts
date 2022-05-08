import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private _prevData: any[] = [];
  data$: Subject<any>  = new Subject();
  constructor(private api: ApiService) {}

  formatData(text: string) {
    if (!text) {
      return;
    }
    const description = text.replace(/[,.]/g, '');
    const tmp = {};
    description.split(' ').forEach((a, b) => {
      if (tmp[a]) {
          ++tmp[a].occurance;
      } else {
          tmp[a] = {word : a, occurance: 1};
      }
    });
    const dataList = Object.values(tmp);
    if (dataList.length > 10) {
      dataList.sort((a: any, b: any) => b.occurance - a.occurance).splice(10);
    }
    this._prevData.push(dataList);
    this.data$.next({description: text, dataList});
  }

  getDescription(url: string) {
    const sub = this.api.get(url).subscribe(data => {
      if (data) {
        this.formatData(data.description);
      }
      sub.unsubscribe();
    }, err => {
      sub.unsubscribe();
    });
  }

}
