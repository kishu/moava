/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideoListService } from './video-list.service';

describe('Service: VideoList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoListService]
    });
  });

  it('should ...', inject([VideoListService], (service: VideoListService) => {
    expect(service).toBeTruthy();
  }));
});
