/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAgentService } from './user-agent.service';

describe('Service: UserAgent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAgentService]
    });
  });

  it('should ...', inject([UserAgentService], (service: UserAgentService) => {
    expect(service).toBeTruthy();
  }));
});
