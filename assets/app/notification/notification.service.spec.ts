import { TestBed, inject } from '@angular/core/testing';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService]
***REMOVED***);
***REMOVED***);

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
***REMOVED***));
});
