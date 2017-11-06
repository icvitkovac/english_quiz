import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
***REMOVED***);
***REMOVED***);

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
***REMOVED***));
});
