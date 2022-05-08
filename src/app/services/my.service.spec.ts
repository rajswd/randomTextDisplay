import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MyService } from './my.service';

describe('MyService', () => {
  let service: MyService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(() => {
    service = TestBed.get(MyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#formatData should trigger  an observable object which contains description and dataList property.', () => {
    const text = 'test test, test1 test1 test1.';
    service.data$.subscribe((resultData) => {
      expect(resultData).toEqual({
        description: text,
        dataList: [
          { word: 'test', occurance: 2 },
          { word: 'test1', occurance: 3 },
        ],
      });
    });
    service.formatData(text);
  });
});
