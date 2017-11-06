import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
***REMOVED***);
***REMOVED***);

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
***REMOVED***));
});
