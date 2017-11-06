import { TestBed, inject } from '@angular/core/testing';

import { InitService } from './init.service';

describe('InitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitService]
***REMOVED***);
***REMOVED***);

  it('should be created', inject([InitService], (service: InitService) => {
    expect(service).toBeTruthy();
***REMOVED***));
});
